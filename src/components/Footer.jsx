import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="contact-us">
          <p>C O N T A C T&nbsp;&nbsp;&nbsp;U S</p>
        </div>
        
        <div className="contact-info">
          <p>33 Coal Reef Drive</p>
          <p>Malé, Maldives</p>
        </div>

        <div className="email">
          <p>info@islandserenity.com</p>
          <p>1-800-333-1111</p>
        </div>

        <div className="social-media">
          <p>F O L L O W&nbsp;&nbsp;&nbsp;U S&nbsp;&nbsp;&nbsp;O N&nbsp;&nbsp;&nbsp;S O C I A L&nbsp;&nbsp;&nbsp;M E D I A</p>
          <div className="social-icons">
            <div className="facebook"></div>
            <div className="instagram"></div>
            <div className="tiktok"></div>
          </div>
        </div>

        <div className="quick-links-title">
          <p>Q U I C K&nbsp;&nbsp;&nbsp;L I N K S</p>
        </div>

        <div className="quick-link-list">
          <ul>
            <li><a href="/about"><p>About Us</p></a></li>
            <li><a href="/room-availability"><p>Our Rooms</p></a></li>
            <li><a href="/activity-availability"><p>Activities</p></a></li>
            <li><a href="/account"><p>Account</p></a></li>
          </ul>
        </div>

      </div>

      <div className="line"></div>
      <div className="tagline"><p>Your greatest escape awaits.</p></div>

      <div className="footer-bottom">
        <p>&copy; 2024 Island Serenity Resort. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
