import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './AboutUs.css'; // Import the AboutUs CSS file

const AboutUs = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="about-container">
        <h1>About Us</h1>
        <p>This is the About Us page. Here you can provide information about the disk scheduling project.</p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
