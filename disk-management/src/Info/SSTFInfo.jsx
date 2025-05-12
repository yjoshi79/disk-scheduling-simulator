import React from 'react';
import './SSTFInfo.css';

const SSTFInfo = () => {
  return (
    <div className="sstf-info-container">
      <h2 className="sstf-info-title">Shortest Seek Time First (SSTF) Disk Scheduling Algorithm</h2>
      <div className="sstf-info-content">
        <p>
          The <strong>Shortest Seek Time First (SSTF)</strong> algorithm selects the disk I/O request that is closest to the current head position.
          It reduces the seek time by always choosing the request with the shortest seek time from the current head.
        </p>

        <h3>How SSTF Works</h3>
        <p>
          1. The disk arm services the request with the shortest seek time from the current position.
          <br />
          2. The process repeats, always selecting the request closest to the current head position.
        </p>

        <h3>Advantages of SSTF</h3>
        <ul>
          <li>Minimizes seek time compared to FCFS.</li>
          <li>Efficient for scenarios where requests are fairly evenly distributed.</li>
        </ul>

        <h3>Disadvantages of SSTF</h3>
        <ul>
          <li>Can cause starvation for requests that are far from the current position, as closer requests keep getting serviced first.</li>
          <li>Does not guarantee the minimum total seek time for all requests.</li>
        </ul>

        <h3>Example</h3>
        <p>
          If the disk has a current head position at 53, and incoming requests at positions: 98, 183, 37, and 122,
          the SSTF algorithm will choose the closest request from 53, which is 37, then the next closest, and so on.
        </p>

        <div className="example-box">
          <h4>Seek Sequence:</h4>
          <p>53 → 37 → 98 → 122 → 183</p>
        </div>

        <h3>Visualizing the SSTF Algorithm</h3>
        <p>
          Below is a graphical representation that shows how the SSTF algorithm works by choosing the closest request each time.
        </p>
        <div className="visualization-box">
          <h4>Gantt Chart of SSTF:</h4>
          <p>Placeholder for Gantt Chart or graphical representation.</p>
        </div>
      </div>
    </div>
  );
};

export default SSTFInfo;
