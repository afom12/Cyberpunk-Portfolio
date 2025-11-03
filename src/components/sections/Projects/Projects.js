// src/components/sections/Projects/Projects.js
import React, { useState } from 'react';
import './projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projectsData = [
    {
      id: 1,
      title: "QueueEase Management System",
      description: "A smart queue management platform built for immigration offices to handle long waiting lines efficiently using digital ticketing and live status updates.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/afom12/queuease.git",
      category: "WEB APP",
      status: "ACTIVE",
      image: "hologram-1",
    },
    {
      id: 2,
      title: "Fashion Hub E-commerce",
      description: "A modern e-commerce web app featuring product listings, filters, cart management, and secure checkout — designed for a smooth fashion shopping experience.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/afom12/Fashion_Hub.git",
      category: "E-COMMERCE",
      status: "LIVE",
      image: "hologram-2",
    },
    {
      id: 3,
      title: "Child Safety App",
      description: "A Flutter-based mobile app that helps parents monitor and guide their children's social media use while promoting safe digital habits.",
      technologies: ["Flutter", "Firebase", "Dart"],
      liveUrl: "#",
      githubUrl: "#",
      category: "MOBILE APP",
      status: "BETA",
      image: "hologram-3",
    },
    {
      id: 4,
      title: "Movie Stream Website",
      description: "A web application that lets users explore, search, and watch movie trailers with dynamic recommendations and genre-based filtering.",
      technologies: ["React", "TMDB API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/afom12/Flutter_Movie_Web.git",
      category: "ENTERTAINMENT",
      status: "ACTIVE",
      image: "hologram-4",
    },
    {
      id: 5,
      title: "Career Compass Pro",
      description: "A job-matching and career guidance platform for developers and workers, featuring role-based recommendations and instant job delivery options.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
      liveUrl: "#",
      githubUrl: "https://github.com/afom12/CareerCompass-Pro.git",
      category: "CAREER",
      status: "IN PROGRESS",
      image: "hologram-5",
    },
  ];

  // Function to handle Live Demo button click
  const handleLiveDemoClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener noreferrer');
    } else {
      alert('Live demo coming soon! 🚀');
    }
  };

  // Function to handle Source Code button click
  const handleSourceCodeClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener noreferrer');
    } else {
      alert('Source code not available yet! 🔧');
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="cyber-grid"></div>
      <div className="container">
        <h2 className="section-title">DIGITAL CREATIONS</h2>
        
        <div className="projects-container">
          {/* Project Navigation */}
          <div className="project-nav">
            {projectsData.map((project, index) => (
              <button
                key={project.id}
                className={`nav-item ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              >
                <span className="nav-number">0{index + 1}</span>
                <span className="nav-title">{project.category}</span>
                <div className="nav-indicator"></div>
              </button>
            ))}
          </div>

          {/* Project Display */}
          <div className="project-display">
            <div className="hologram-container">
              <div className="hologram-projector">
                <div className="projector-beam"></div>
                <div className="hologram-content">
                  <div className="hologram-card">
                    <div className="card-glitch"></div>
                    
                    {/* Project Header */}
                    <div className="project-header">
                      <div className="project-badge">
                        <span className="badge-category">{projectsData[activeProject].category}</span>
                        <span className={`badge-status ${projectsData[activeProject].status.toLowerCase().replace(' ', '-')}`}>
                          {projectsData[activeProject].status}
                        </span>
                      </div>
                      <div className="project-year">2024</div>
                    </div>

                    {/* Project Title */}
                    <h3 className="project-title-hologram">
                      {projectsData[activeProject].title}
                    </h3>

                    {/* Project Description */}
                    <p className="project-description-hologram">
                      {projectsData[activeProject].description}
                    </p>

                    {/* Tech Stack */}
                    <div className="tech-stack">
                      {projectsData[activeProject].technologies.map((tech, index) => (
                        <span key={tech} className="tech-chip" style={{animationDelay: `${index * 0.1}s`}}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Actions - NOW WITH CLICK HANDLERS! */}
                    <div className="project-actions">
                      <button 
                        className="hologram-btn primary"
                        onClick={() => handleLiveDemoClick(projectsData[activeProject].liveUrl)}
                      >
                        <span className="btn-icon">🌐</span>
                        LIVE DEMO
                      </button>
                      <button 
                        className="hologram-btn secondary"
                        onClick={() => handleSourceCodeClick(projectsData[activeProject].githubUrl)}
                      >
                        <span className="btn-icon">💻</span>
                        SOURCE CODE
                      </button>
                    </div>

                    {/* Hologram Effects */}
                    <div className="hologram-scan"></div>
                    <div className="hologram-grid"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Counter */}
        <div className="project-counter">
          <span className="counter-current">0{activeProject + 1}</span>
          <span className="counter-divider">/</span>
          <span className="counter-total">0{projectsData.length}</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;