import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleAlgorithmsClick = () => {
    navigate('/algorithms');
  };

  return (
    <header className="header-container">
      <div className="header-left">
        <h2>Disk Scheduling Algorithms</h2>
      </div>
      <div className="header-right">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/disk-visualization" className="header-link">Visualizer</Link>
        <button onClick={handleAlgorithmsClick} className="header-link">Algorithms</button>
      </div>
    </header>
  );
};

export default Header;
