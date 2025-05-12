import React from 'react';
import { useParams } from 'react-router-dom';
import './Simulate.css';
import Header from './Header';
import Footer from './Footer';

// Import all algorithm components
import FCFSSim from '../algorithm/FCFSSim';
import SJFSSim from '../algorithm/SJFSSim';
import SCANSim from '../algorithm/SCANSim';
import LOOKSim from '../algorithm/LOOKSim';
import CSCANSim from '../algorithm/CSCANSim';
import CLOOKSim from '../algorithm/CLOOKSim';

const Simulate = () => {
  const { algo } = useParams(); // e.g., 'fcfs', 'sstf', etc.

  const renderSimulation = () => {
    switch (algo.toLowerCase()) {
      case 'fcfs':
        return <FCFSSim />;
      case 'sstf':
        return <SJFSSim />;
      case 'scan':
        return <SCANSim />;
      case 'look':
        return <LOOKSim />;
      case 'cscan':
        return <CSCANSim />;
      case 'clook':
        return <CLOOKSim />;
      default:
        return <div>Algorithm "{algo}" not found.</div>;
    }
  };

  return (
    <div className="simulate-page">
      <Header />
      <div className="simulation-container">
        {renderSimulation()}
      </div>
      <Footer />
    </div>
  );
};

export default Simulate;
