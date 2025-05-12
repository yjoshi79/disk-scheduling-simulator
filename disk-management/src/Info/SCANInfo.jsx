import React from 'react';
import './SCANInfo.css';

const SCANInfo = () => {
  return (
    <div className="scan-info-container">
      <h2 className="scan-info-title">SCAN Disk Scheduling Algorithm</h2>
      <div className="scan-info-content">
        <p>
          The SCAN (or Elevator) disk scheduling algorithm moves the disk arm towards one end, servicing all requests in that direction until the end is reached, then reverses direction and services the requests in the opposite direction.
        </p>
        
        <h3>How SCAN Works:</h3>
        <ul>
          <li>Disk arm starts from one end of the disk and moves towards the other end.</li>
          <li>All the requests in the current direction are serviced.</li>
          <li>When the end of the disk is reached, the arm reverses its direction and services the remaining requests.</li>
          <li>The algorithm is efficient when the requests are uniformly distributed across the disk.</li>
        </ul>

        <h3>Advantages:</h3>
        <ul>
          <li>Provides a fair distribution of the disk arm movement.</li>
          <li>Helps in reducing the long seek times for requests.</li>
        </ul>

        <h3>Disadvantages:</h3>
        <ul>
          <li>It can lead to starvation for requests in the opposite direction when the arm is busy servicing requests in the other direction.</li>
          <li>Requires the knowledge of the position of the disk arm and the queue of requests.</li>
        </ul>

        <div className="example-box">
          <h4>Example</h4>
          <p>Consider the disk arm starts at position 53. The requests are 98, 183, 37, 122, and 14.</p>
          <p>The disk arm moves to 98 first, then 183, then reverses direction and services 37, 14, and finally 122.</p>
        </div>

        <div className="visualization-box">
          <h4>SCAN Algorithm Visualization</h4>
          <p>In this simulation, you can visualize how the disk arm moves towards the end, reverses direction, and services the requests in the opposite direction.</p>
        </div>
      </div>
    </div>
  );
};

export default SCANInfo;
