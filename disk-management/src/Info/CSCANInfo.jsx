import React from 'react';
import './CSCANInfo.css';

const CSCANInfo = () => {
  return (
    <div className="cscan-info-container">
      <h2 className="cscan-info-title">C-SCAN Disk Scheduling Algorithm</h2>
      <div className="cscan-info-content">
        <p>
          The C-SCAN (Circular SCAN) algorithm is a variant of the SCAN algorithm. In C-SCAN, the disk arm moves in one direction and services requests until it reaches the end of the disk. Then, it jumps back to the beginning of the disk and continues servicing requests in the same direction.
        </p>
        
        <h3>How C-SCAN Works:</h3>
        <ul>
          <li>The disk arm moves in one direction, servicing requests as it encounters them.</li>
          <li>When the end of the disk is reached, the arm jumps back to the beginning without servicing any requests.</li>
          <li>The arm continues moving in the same direction, ensuring that requests are serviced in one direction only.</li>
        </ul>

        <h3>Advantages:</h3>
        <ul>
          <li>Provides a more uniform wait time for requests.</li>
          <li>Efficient for systems with heavy I/O operations.</li>
        </ul>

        <h3>Disadvantages:</h3>
        <ul>
          <li>Requests at the beginning and end of the disk can experience higher waiting times.</li>
          <li>The algorithm requires knowledge of the position of the disk arm and the requests in the queue.</li>
        </ul>

        <div className="example-box">
          <h4>Example</h4>
          <p>Consider the disk arm starts at position 53. The requests are 98, 183, 37, 122, and 14. The disk arm moves from 53 to 98, 122, 183, and then reaches the end of the disk. Once the end is reached, it goes back to position 0 and continues to service requests in the same direction.</p>
        </div>

        <div className="visualization-box">
          <h4>C-SCAN Algorithm Visualization</h4>
          <p>In this simulation, you can visualize how the disk arm moves from the starting point to the end, then returns to the beginning to continue servicing requests in the same direction.</p>
        </div>
      </div>
    </div>
  );
};

export default CSCANInfo;
