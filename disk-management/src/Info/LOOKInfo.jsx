import React from 'react';
import './LOOKInfo.css';

const LOOKInfo = () => {
  return (
    <div className="look-info-container">
      <h2 className="look-info-title">LOOK Disk Scheduling Algorithm</h2>
      <div className="look-info-content">
        <p>
          The LOOK disk scheduling algorithm is similar to the SCAN algorithm. However, instead of going all the way to the end of the disk, the LOOK algorithm moves the disk arm only as far as the last request in each direction.
        </p>
        
        <h3>How LOOK Works:</h3>
        <ul>
          <li>The disk arm moves in one direction, servicing requests in that direction.</li>
          <li>Once the last request in that direction is serviced, the disk arm reverses direction and starts servicing requests in the opposite direction.</li>
          <li>The disk arm stops once all requests have been serviced, without moving all the way to the end of the disk.</li>
        </ul>

        <h3>Advantages:</h3>
        <ul>
          <li>Efficient in servicing requests because it does not go to the end of the disk if there are no requests.</li>
          <li>Reduces unnecessary travel of the disk arm.</li>
        </ul>

        <h3>Disadvantages:</h3>
        <ul>
          <li>Can lead to starvation for requests in the opposite direction if no requests are in the current direction.</li>
          <li>Requires knowledge of the position of the disk arm and the requests in the queue.</li>
        </ul>

        <div className="example-box">
          <h4>Example</h4>
          <p>Consider the disk arm starts at position 53. The requests are 98, 183, 37, 122, and 14.</p>
          <p>The disk arm moves to 98 first, then 183, and reverses direction to service 37, 14, and finally 122.</p>
        </div>

        <div className="visualization-box">
          <h4>LOOK Algorithm Visualization</h4>
          <p>In this simulation, you can visualize how the disk arm moves towards the last request in each direction and reverses once all requests are serviced in that direction.</p>
        </div>
      </div>
    </div>
  );
};

export default LOOKInfo;
