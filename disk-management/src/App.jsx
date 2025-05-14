import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Simulate from './components/Simulate';
import MoreInfo from './components/MoreInfo';
import DiskAlgorithms from './components/DiskAlgorithms';
import DiskSchedulingAnimation from './components/DiskSchedulingAnimation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulate/:algo" element={<Simulate />} />
        <Route path="/moreinfo/:algoType" element={<MoreInfo />} /> 
        <Route path="/algorithms" element={<DiskAlgorithms />} />
        <Route path="/disk-visualization" element={
          <div style={{ padding: '20px' }}>
            <Header />
            <h1 style={{ textAlign: 'center', margin: '30px 0', color: '#3b5bdb', fontWeight: '600' }}>Disk Scheduling Algorithm Visualization</h1>
            <DiskSchedulingAnimation 
              algorithm="FCFS"
              requests={[]}
              initialHead={13}
              trackSize={54}
              startingTrack={13}
              spinDirection="right-to-left"
            />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
