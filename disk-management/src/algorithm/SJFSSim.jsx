import React, { useState, useEffect } from "react";
import "./SJFSSim.css";
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

const SJFSSim = () => {
  const [requests, setRequests] = useState("");
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
    const sortedRequests = [...reqArr].sort((a, b) => a - b);
    const sequence = [0, ...sortedRequests];
    const movements = sequence.slice(1).map((r, i) => Math.abs(r - sequence[i]));
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
    setRequests(requestsArr.join(","));
  };

  return (
    <div className="sim-page-bg">
      <div className="sjfs-info-card">
        <h2>Shortest Job First (SJF)</h2>
        <p>
          SJF executes processes in order of the shortest burst time first. This minimizes the average waiting time.
        </p>
        <hr />
        <p>
          <em>
            SJF can be either preemptive or non-preemptive. In this simulation, we use the non-preemptive version.
          </em>
        </p>
        <span className="sjfs-type-tag">Non-preemptive Algorithm</span>
      </div>
      <div className="sjfs-config-card">
        <h3>Process Configuration</h3>
        <button type="button" className="sjfs-random-btn" onClick={generateRandom}>Generate Random Requests</button>
        <form onSubmit={handleSubmit} className="sjfs-form">
          <label>Enter Request Queue (comma-separated):</label>
          <input
            type="text"
            value={requests}
            onChange={(e) => setRequests(e.target.value)}
            placeholder="e.g. 98,183,37,122"
          />
          <button type="submit">Simulate</button>
        </form>
        {result && (
          <div className="sjfs-output-card">
            <h3>Output</h3>
            <p><strong>Seek Sequence:</strong> {result.sequence.slice(0, currentStep).join(" → ")}</p>
            <p><strong>Total Seek Time:</strong> {result.movements.slice(0, currentStep - 1).reduce((a, b) => a + b, 0)}</p>
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
                    labels: result.movements.slice(0, currentStep - 1).map((_, i) => `Move ${i + 1}`),
                    datasets: [
                      {
                        label: "Seek Distance",
                        data: result.movements.slice(0, currentStep - 1),
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
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
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
    </div>
  );
};

export default SJFSSim;
