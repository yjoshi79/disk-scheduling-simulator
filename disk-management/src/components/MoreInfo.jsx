import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './MoreInfo.css';

// Import all info components
import FCFSInfo from '../Info/FCFSInfo';
import SSTFInfo from '../Info/SSTFInfo';
import SCANInfo from '../Info/SCANInfo';
import LOOKInfo from '../Info/LOOKInfo';
import CSCANInfo from '../Info/CSCANInfo';
import CLOOKInfo from '../Info/CLOOKInfo';

const MoreInfo = () => {
  const { algoType } = useParams();

  const renderInfo = () => {
    switch (algoType.toLowerCase()) {
      case 'fcfs':
        return <FCFSInfo/>;
      case 'sstf':
        return <SSTFInfo />;
      case 'scan':
        return <SCANInfo />;
      case 'look':
        return <LOOKInfo />;
      case 'cscan':
        return <CSCANInfo />;
      case 'clook':
        return <CLOOKInfo/>;
      default:
        return <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
          Information not found for "{algoType.toUpperCase()}"
        </div>;
    }
  };

  return (
    <>
      <Header />
      <div className="more-info-container">
        {renderInfo()}
      </div>
      <Footer />
    </>
  );
};

export default MoreInfo;
