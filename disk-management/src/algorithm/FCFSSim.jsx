import React, { useState } from "react";
import "./FCFSSim.css";
import DiskSchedulingAnimation from "../components/DiskSchedulingAnimation";

const FCFSSim = () => {
  // Initial sample data for the animation
  const initialRequests = [20, 17, 0, 28, 15, 28, 3, 13, 7, 6];
  const initialHead = 13;
  const trackSize = 54;
  
  return (
    <div className="sim-page-bg">
      <div className="fcfs-info-card">
        <h2>First Come First Serve (FCFS)</h2>
        <p>
          Processes are executed in the order they arrive in the request queue. This is the simplest disk scheduling algorithm.
        </p>
        <hr />
        <p>
          <em>
            FCFS is non-preemptive, meaning once a request starts execution, it continues until it completes. This can lead to the "convoy effect" where short requests wait behind long ones.
          </em>
        </p>
        <span className="fcfs-type-tag">Non-preemptive Algorithm</span>
      </div>
      
      <div className="graphical-demo-container">
        <h2>Graphical Demonstration</h2>
        <DiskSchedulingAnimation 
          algorithm="FCFS"
          requests={initialRequests}
          initialHead={initialHead}
          trackSize={trackSize}
          startingTrack={initialHead}
          spinDirection="right-to-left"
        />
      </div>
    </div>
  );
};

export default FCFSSim;