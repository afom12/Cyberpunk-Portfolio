// src/components/ARScanner/ARScanner.js
import React, { useState } from 'react';
import './ARScanner.css';

const ARScanner = () => {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="ar-scanner">
      <button 
        className={`ar-btn ${isScanning ? 'scanning' : ''}`}
        onClick={() => setIsScanning(!isScanning)}
      >
        <div className="ar-icon">👁️</div>
        <span className="ar-text">AR SCAN</span>
      </button>

      {isScanning && (
        <div className="ar-overlay">
          <div className="scanner-frame">
            <div className="scanner-corner top-left"></div>
            <div className="scanner-corner top-right"></div>
            <div className="scanner-corner bottom-left"></div>
            <div className="scanner-corner bottom-right"></div>
            
            <div className="scanner-line"></div>
            <div className="scanner-dots">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="scanner-dot" style={{animationDelay: `${i * 0.1}s`}}></div>
              ))}
            </div>

            <div className="ar-data">
              <div className="data-point">
                <span className="data-label">TECH STACK</span>
                <span className="data-value">REACT • THREE.JS • WEBGL</span>
              </div>
              <div className="data-point">
                <span className="data-label">EXPERIENCE</span>
                <span className="data-value">3+ YEARS QUANTUM DEV</span>
              </div>
              <div className="data-point">
                <span className="data-label">STATUS</span>
                <span className="data-value">READY FOR MISSION</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ARScanner;