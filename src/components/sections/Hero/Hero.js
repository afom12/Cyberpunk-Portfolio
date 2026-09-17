// src/components/sections/Hero/Hero.js
import React, { useEffect, useState } from 'react';
import './Hero.css';
// Import your photo - make sure the path is correct
import profilePhoto from '../../../assets/images/pic.jpg'; // Change this path to your actual photo

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Frontend & Full-Stack Developer";
  
  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);
    
    return () => clearInterval(typingEffect);
  }, []);

  // Function to handle Contact button click
  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle Resume download
  const handleResumeDownload = () => {
    // Method 1: Direct download link
    const resumeUrl = '/resume/Afomiya_Ketsella_CV.pdf'; // Put your PDF in public/resume/ folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Afomiya_Ketsella_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Method 2: Or open in new tab
    // window.open(resumeUrl, '_blank');
  };

  // Function to scroll to projects
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Main Content */}
          <div className="hero-text">
            <div className="greeting">
              <span className="hello">HELLO</span>
              <div className="pulse-dot"></div>
            </div>
            
            <h1 className="hero-title">
              I'M <span className="name-gradient">Afomiya</span> 
              <span className="name-glow">Ketsella</span>
            </h1>
            
            <div className="typing-container">
              <h2 className="hero-subtitle">
                <span className="typed-text">{displayText}</span>
                <span className="cursor">|</span>
              </h2>
            </div>

            <p className="hero-description">
              Software Engineering graduate focused on <span className="highlight">frontend and full-stack development</span> — I build clean, responsive React applications and enjoy turning real-world problems into working products.
            </p>

            {/* Interactive CTA Buttons */}
            <div className="hero-actions">
              <button className="cta-btn primary" onClick={scrollToProjects}>
                <span className="btn-icon">🚀</span>
                VIEW MY PROJECTS
              </button>
              <button className="cta-btn secondary" onClick={handleResumeDownload}>
                <span className="btn-icon">💼</span>
                DOWNLOAD CV
              </button>
              <button className="cta-btn tertiary" onClick={handleContactClick}>
                <span className="btn-icon">📩</span>
                CONTACT ME
              </button>
            </div>

            {/* Stats Bar */}
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">40+</div>
                <div className="stat-label">PROJECTS BUILT</div>
              </div>
              <div className="stat">
                <div className="stat-number">1</div>
                <div className="stat-label">INTERNSHIP</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">PASSION</div>
              </div>
            </div>
          </div>

          {/* YOUR PHOTO Section - Replaced the placeholder */}
          <div className="hero-visual">
            <div className="avatar-container">
              <div className="avatar-glitch"></div>
              <div className="avatar-main">
                {/* Your actual photo */}
                <img 
                  src={profilePhoto} 
                  alt="Afomiya Ketsella - Software Developer"
                  className="profile-photo"
                />
                <div className="photo-frame"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;