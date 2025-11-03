// src/components/sections/About/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="cyber-grid"></div>
      <div className="container">
        <h2 className="section-title">DIGITAL ORIGIN</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="cyber-card">
              <div className="card-header">
                <h3 className="card-title">SYSTEM PROFILE</h3>
                <div className="card-status">ACTIVE</div>
              </div>
              
              <p className="about-description">
                I’m a <span className="highlight">software developer</span> crafting next-generation 
                web experiences that blend creativity, functionality, and performance. 
                Every line of code is written with passion and precision.
             </p>

              
              <div className="cyber-stats">
                <div className="stat">
                  <div className="stat-value">2+</div>
                  <div className="stat-label">YEARS IN THE Developing</div>
                </div>
                <div className="stat">
                  <div className="stat-value">20+</div>
                  <div className="stat-label">Real Projects</div>
                </div>
                <div className="stat">
                  <div className="stat-value">∞</div>
                  <div className="stat-label">POSSIBILITIES</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="neural-network">
              <div className="node node-1"></div>
              <div className="node node-2"></div>
              <div className="node node-3"></div>
              <div className="connection"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;