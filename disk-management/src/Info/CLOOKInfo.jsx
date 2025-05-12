import React from 'react';
import './CLOOKInfo.css';

const CLOOKInfo = () => {
  return (
    <div className="clook-info-container">
      <h2 className="clook-info-title">C-LOOK Disk Scheduling Algorithm</h2>
      <div className="clook-info-content">
        <p>
          The C-LOOK (Circular LOOK) algorithm is a variant of the LOOK algorithm, where the disk arm moves in one direction and once it reaches the end of the disk, it jumps back to the starting position without servicing any requests and continues moving in the same direction. Unlike LOOK, C-LOOK doesn't service requests on the return journey.
        </p>
        
        <h3>How C-LOOK Works:</h3>
        <ul>
          <li>The disk arm starts at a position and moves in one direction, servicing requests as it encounters them.</li>
          <li>When the disk arm reaches the end of the disk, it returns to the starting position without servicing any requests.</li>
          <li>The disk arm continues in the same direction, ensuring that requests are serviced in one direction only.</li>
        </ul>

        <h3>Advantages:</h3>
        <ul>
          <li>More efficient than the traditional LOOK algorithm as it reduces the time taken for unnecessary backtracking.</li>
          <li>Provides a more predictable response time for requests.</li>
        </ul>

        <h3>Disadvantages:</h3>
        <ul>
          <li>Requests at the beginning and end of the disk can experience higher waiting times due to the arm's return journey.</li>
          <li>The algorithm requires knowledge of the position of the disk arm and the requests in the queue.</li>
        </ul>

        <div className="example-box">
          <h4>Example</h4>
          <p>Consider the disk arm starts at position 53. The requests are 98, 183, 37, 122, and 14. The disk arm moves from 53 to 98, 122, and 183, reaching the end of the disk. Afterward, it jumps back to position 0 and continues servicing requests in the same direction.</p>
        </div>

        <div className="visualization-box">
          <h4>C-LOOK Algorithm Visualization</h4>
          <p>In this simulation, you can visualize how the disk arm moves from the starting point to the end and then jumps back to the start to continue servicing requests in the same direction.</p>
        </div>
      </div>
    </div>
  );
};

export default CLOOKInfo;
