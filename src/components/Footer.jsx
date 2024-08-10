import React from 'react';
import '../styles/Footer.css'; // Ensure this file exists for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>C O N T A C T&nbsp;&nbsp;&nbsp;U S</p>
          <p>33 Coal Reef Drive</p>
          <p>Malé, Maldives</p>
          <br></br>
          <p>info@islandserenity.com</p>
          <p>1-800-333-1111</p>
        </div>
        
        <div className="social-media">
          <h3>Follow us</h3>
          <div className="facebook"></div>
          <div className="instagram"></div>
          <div className="tiktok"></div>

        </div>
        
        <div className="footer-section quick-links">
          <h3>About Us</h3>
          <p>sldjslfksfsdkljf</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Island Serenity Resort. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
