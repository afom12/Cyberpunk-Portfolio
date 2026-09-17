// src/components/sections/About/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="cyber-grid"></div>
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="cyber-card">
              <div className="card-header">
                <h3 className="card-title">PROFILE</h3>
                <div className="card-status">OPEN TO WORK</div>
              </div>
              
              <p className="about-description">
                I'm a <span className="highlight">Software Engineering graduate</span> from Bahir Dar University,
                focused on <span className="highlight">frontend and full-stack development</span>. I like turning
                real problems — a slow queue, a messy checkout flow, a hard-to-navigate job search — into
                working React and Node.js applications that people can actually use.
              </p>

              <p className="about-description">
                I built hands-on experience as a Full-Stack Developer Intern at Alyah Technologies, alongside
                freelance frontend work and volunteer development on university projects. I also hold a
                Bachelor's in Management from TIS Abbay College, which shapes how I think about the product
                and business side of what I build, not just the code. I'm still learning constantly — new
                frameworks, better patterns, cleaner UI — and looking to bring that mindset to a team.
              </p>

              <div className="cyber-stats">
                <div className="stat">
                  <div className="stat-value">40+</div>
                  <div className="stat-label">Projects Built</div>
                </div>
                <div className="stat">
                  <div className="stat-value">2026</div>
                  <div className="stat-label">Graduate</div>
                </div>
                <div className="stat">
                  <div className="stat-value">∞</div>
                  <div className="stat-label">Possibilities</div>
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