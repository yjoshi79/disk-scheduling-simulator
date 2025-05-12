import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Simulate from './components/Simulate';
import MoreInfo from './components/MoreInfo';
import DiskAlgorithms from './components/DiskAlgorithms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulate/:algo" element={<Simulate />} />
        <Route path="/moreinfo/:algoType" element={<MoreInfo />} /> 
        <Route path="/algorithms" element={<DiskAlgorithms />} />
      </Routes>
    </Router>
  );
}

export default App;
