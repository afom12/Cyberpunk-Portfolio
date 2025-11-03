// src/components/layout/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 Afomiya Ketsella. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/afom12" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/afom12" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/afom12" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;