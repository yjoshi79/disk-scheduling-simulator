import React from 'react';
import './FCFSInfo.css';

const FCFSInfo = () => {
  return (
    <div className="fcfs-info-container">
      <h2 className="fcfs-info-title">FCFS Disk Scheduling Algorithm</h2>
      <div className="fcfs-info-content">
        <p>
          The <strong>First-Come, First-Served (FCFS)</strong> scheduling algorithm is the simplest disk scheduling algorithm. 
          It services disk I/O requests in the order they are received, without reordering the requests. 
          The disk arm moves from the current position to the requested position for each I/O request.
        </p>

        <h3>How FCFS Works</h3>
        <p>
          1. The requests are queued in the order they arrive.
          <br />
          2. The disk arm moves from the current position to the first request in the queue, then to the second, and so on.
          <br />
          3. Each movement is calculated and added to the total seek time.
        </p>

        <h3>Advantages of FCFS</h3>
        <ul>
          <li>Simple to implement and understand.</li>
          <li>Fair to all requests, as each request is treated equally.</li>
        </ul>

        <h3>Disadvantages of FCFS</h3>
        <ul>
          <li>It may result in inefficient seek times, especially if the requests are spread far apart.</li>
          <li>Does not optimize disk arm movement, leading to higher average seek time.</li>
        </ul>

        <h3>Example</h3>
        <p>
          Consider a disk with a current head position at 53. The incoming requests are at positions: 98, 183, 37, 122.
          The FCFS algorithm will process the requests in the order they arrive, moving the disk arm from the current position
          to each of the request positions in sequence.
        </p>

        <div className="example-box">
          <h4>Seek Sequence:</h4>
          <p>53 → 98 → 183 → 37 → 122</p>
        </div>

        <h3>Visualizing the FCFS Algorithm</h3>
        <p>
          The visualization below shows the sequence of requests that the disk arm processes. Each movement from one request
          to the next is shown, helping you understand how the FCFS algorithm works step-by-step.
        </p>
        <div className="visualization-box">
          <h4>Gantt Chart of FCFS:</h4>
          <p>Placeholder for Gantt Chart or graphical representation.</p>
        </div>
      </div>
    </div>
  );
};

export default FCFSInfo;
