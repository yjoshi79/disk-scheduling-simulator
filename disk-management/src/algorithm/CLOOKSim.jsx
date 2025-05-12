import React, { useState, useEffect } from "react";
import "./SimShared.css";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const CLOOKSim = () => {
  const [requests, setRequests] = useState("");
  const [head, setHead] = useState("");
  const [direction, setDirection] = useState("right");
  const [result, setResult] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let interval = null;
    if (playing && result && currentStep < result.sequence.length) {
      interval = setInterval(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    if (result && currentStep >= result.sequence.length) {
      setPlaying(false);
    }
    return () => clearInterval(interval);
  }, [playing, currentStep, result]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqArr = requests.split(",").map(Number);
    const headStart = Number(head);
    let sequence = [headStart];
    let remaining = [...reqArr];
    let current = headStart;
    let movements = [];
    
    // Sort requests
    remaining.sort((a, b) => a - b);
    
    // Find the index where head position would be inserted
    let headIndex = remaining.findIndex(req => req >= headStart);
    if (headIndex === -1) headIndex = remaining.length;

    if (direction === "right") {
      // Process requests in the right direction
      for (let i = headIndex; i < remaining.length; i++) {
        movements.push(Math.abs(current - remaining[i]));
        current = remaining[i];
        sequence.push(current);
      }
      // Jump to the first request and process remaining requests
      if (headIndex > 0) {
        movements.push(Math.abs(current - remaining[0]));
        current = remaining[0];
        sequence.push(current);
        for (let i = 1; i < headIndex; i++) {
          movements.push(Math.abs(current - remaining[i]));
          current = remaining[i];
          sequence.push(current);
        }
      }
    } else {
      // Process requests in the left direction
      for (let i = headIndex - 1; i >= 0; i--) {
        movements.push(Math.abs(current - remaining[i]));
        current = remaining[i];
        sequence.push(current);
      }
      // Jump to the last request and process remaining requests
      if (headIndex < remaining.length) {
        movements.push(Math.abs(current - remaining[remaining.length - 1]));
        current = remaining[remaining.length - 1];
        sequence.push(current);
        for (let i = remaining.length - 2; i >= headIndex; i--) {
          movements.push(Math.abs(current - remaining[i]));
          current = remaining[i];
          sequence.push(current);
        }
      }
    }

    const totalSeekTime = movements.reduce((acc, cur) => acc + cur, 0);
    let time = 0;
    const ganttData = sequence.map((pos, i) => {
      const move = i === 0 ? 0 : Math.abs(pos - sequence[i - 1]);
      const start = time;
      time += move;
      return {
        label: `Request ${i}`,
        start,
        end: time,
        pos,
      };
    });

    setResult({
      sequence,
      movements,
      totalSeekTime,
      ganttData,
    });
    setCurrentStep(1);
    setPlaying(true);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setPlaying(false);
  };

  const handlePlay = () => {
    if (result && currentStep < result.sequence.length) {
      setPlaying(true);
    }
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const generateRandom = () => {
    const numRequests = Math.floor(Math.random() * 4) + 5;
    const requestsArr = Array.from({ length: numRequests }, () => Math.floor(Math.random() * 200));
    const headVal = Math.floor(Math.random() * 200);
    setRequests(requestsArr.join(","));
    setHead(headVal);
  };

  return (
    <div className="sim-page-bg">
      <div className="fcfs-info-card">
        <h2 className="sim-title">C-LOOK Disk Scheduling Simulation</h2>
        <p className="sim-desc">
          C-LOOK is an improved version of C-SCAN that only moves as far as the last request in each direction, rather than going to the end of the disk. This makes it more efficient than C-SCAN.
        </p>
        <hr />
        <p className="sim-note">
          <em>
            C-LOOK provides better performance than C-SCAN by eliminating unnecessary disk arm movements to the end of the disk.
          </em>
        </p>
        <span className="sim-type-tag">Non-preemptive Algorithm</span>
      </div>
      <div className="fcfs-config-card">
        <h3 className="sim-config-title">Disk Request Configuration</h3>
        <button type="button" className="fcfs-random-btn" onClick={generateRandom}>Generate Random Requests</button>
        <form onSubmit={handleSubmit} className="sim-form">
          <label>Enter Request Queue (comma-separated):</label>
          <input
            type="text"
            value={requests}
            onChange={(e) => setRequests(e.target.value)}
            placeholder="e.g. 98,183,37,122"
          />
          <label>Enter Initial Head Position:</label>
          <input
            type="number"
            value={head}
            onChange={(e) => setHead(e.target.value)}
            placeholder="e.g. 53"
          />
          <label>Select Direction:</label>
          <select value={direction} onChange={(e) => setDirection(e.target.value)}>
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
          <button type="submit">Simulate</button>
        </form>
      </div>
      {result && (
        <div className="fcfs-output-card">
          <h3>Output</h3>
          <p><strong>Seek Sequence:</strong> {result.sequence.slice(0, currentStep).join(" → ")}</p>
          <p><strong>Total Seek Time:</strong> {result.movements.slice(0, currentStep-1).reduce((a, b) => a + b, 0)}</p>
          <div className="charts">
            <div className="chart">
              <h4>Line Graph</h4>
              <Line
                data={{
                  labels: result.sequence.slice(0, currentStep).map((_, i) => `Step ${i}`),
                  datasets: [
                    {
                      label: "Disk Position",
                      data: result.sequence.slice(0, currentStep),
                      borderColor: "#4b7bec",
                      fill: false,
                      tension: 0.1,
                    },
                  ],
                }}
              />
            </div>
            <div className="chart">
              <h4>Bar Chart of Seek Movements</h4>
              <Bar
                data={{
                  labels: result.movements.slice(0, currentStep-1).map((_, i) => `Move ${i + 1}`),
                  datasets: [
                    {
                      label: "Seek Distance",
                      data: result.movements.slice(0, currentStep-1),
                      backgroundColor: "#20bf6b",
                    },
                  ],
                }}
              />
            </div>
            <div className="chart">
              <h4>Gantt Chart (Seek Time Timeline)</h4>
              <Bar
                data={{
                  labels: result.ganttData.slice(0, currentStep).map((d) => d.label),
                  datasets: [
                    {
                      label: "Seek Time",
                      data: result.ganttData.slice(0, currentStep).map((d) => d.end - d.start),
                      backgroundColor: "#f39c12",
                      base: result.ganttData.slice(0, currentStep).map((d) => d.start),
                    },
                  ],
                }}
                options={{
                  indexAxis: "y",
                  scales: {
                    x: {
                      title: {
                        display: true,
                        text: "Time Units",
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: "Requests",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            {playing ? (
              <button onClick={handlePause} disabled={!playing}>Pause</button>
            ) : (
              <button onClick={handlePlay} disabled={currentStep >= result.sequence.length}>Play</button>
            )}
            <button onClick={handleReset} disabled={currentStep === 1 && !playing}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CLOOKSim;
