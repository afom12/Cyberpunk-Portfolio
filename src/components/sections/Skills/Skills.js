// src/components/sections/Skills/Skills.js
import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const matrixRef = useRef(null);

  useEffect(() => {
    const canvas = matrixRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  // New skill level system - much better than percentages!
  const skillLevels = {
    EXPERT: { label: "EXPERT", icon: "★★★★★", color: "#39ff14" },
    ADVANCED: { label: "ADVANCED", icon: "★★★★☆", color: "#00f5ff" },
    INTERMEDIATE: { label: "INTERMEDIATE", icon: "★★★☆☆", color: "#bc13fe" },
    BEGINNER: { label: "BEGINNER", icon: "★★☆☆☆", color: "#ff00ff" },
    EXPLORING: { label: "EXPLORING", icon: "★☆☆☆☆", color: "#007acc" }
  };

  const skillCategories = [
    {
      title: "FRONTEND",
      icon: "💻",
      skills: [
        { name: "React", level: "EXPERT", color: "#00f5ff" },
        { name: "JavaScript", level: "ADVANCED", color: "#007acc" },
        { name: "Tailwind CSS", level: "ADVANCED", color: "#bc13fe" },
        { name: "Figma", level: "INTERMEDIATE", color: "#ff00ff" },
        { name: "CSS3", level: "EXPERT", color: "#39ff14" },
        { name: "HTML5", level: "EXPERT", color: "#00f5ff" }
      ]
    },
    {
      title: "BACKEND",
      icon: "⚡",
      skills: [
        { name: "Node.js", level: "ADVANCED", color: "#00f5ff" },
        { name: "Python", level: "INTERMEDIATE", color: "#007acc" },
        { name: "PostgreSQL", level: "INTERMEDIATE", color: "#bc13fe" },
        { name: "MongoDB", level: "INTERMEDIATE", color: "#ff00ff" },
        { name: "Express.js", level: "ADVANCED", color: "#39ff14" },
        { name: "REST APIs", level: "ADVANCED", color: "#00f5ff" }
      ]
    },
    {
      title: "TOOLS & PLATFORMS",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: "ADVANCED", color: "#00f5ff" },
        { name: "VS Code", level: "EXPERT", color: "#007acc" },
        { name: "Cursor AI", level: "INTERMEDIATE", color: "#bc13fe" },
        { name: "Postman", level: "ADVANCED", color: "#ff00ff" },
        { name: "Netlify", level: "ADVANCED", color: "#39ff14" },
        { name: "Firebase", level: "INTERMEDIATE", color: "#00f5ff" }
      ]
    },
    {
      title: "EMERGING TECH",
      icon: "🚀",
      skills: [
        { name: "AI/ML", level: "EXPLORING", color: "#00f5ff" },
        { name: "Blockchain", level: "EXPLORING", color: "#007acc" },
        { name: "Web3", level: "BEGINNER", color: "#bc13fe" },
        { name: "Cybersecurity", level: "INTERMEDIATE", color: "#ff00ff" },
        { name: "IoT", level: "BEGINNER", color: "#39ff14" },
        { name: "Cloud Computing", level: "INTERMEDIATE", color: "#00f5ff" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <canvas ref={matrixRef} className="matrix-canvas"></canvas>
      <div className="skills-overlay"></div>
      
      <div className="container">
        <h2 className="section-title">Tech Stack & Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="skill-category" style={{animationDelay: `${categoryIndex * 0.2}s`}}>
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
                <div className="category-glow"></div>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-level">
                        <span 
                          className="skill-stars"
                          style={{ color: skillLevels[skill.level].color }}
                        >
                          {skillLevels[skill.level].icon}
                        </span>
                        <span 
                          className="skill-label"
                          style={{ color: skillLevels[skill.level].color }}
                        >
                          {skillLevels[skill.level].label}
                        </span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${getProgressWidth(skill.level)}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}00)`
                        }}
                      >
                        <div className="skill-glow" style={{background: skill.color}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Radar */}
        <div className="tech-radar">
          <div className="radar-container">
            <div className="radar-sweep"></div>
            <div className="radar-dots">
              {["AI", "Blockchain", "VR", "IoT", "Quantum", "5G", "Edge"].map((tech, index) => (
                <div 
                  key={tech}
                  className="radar-dot"
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    transform: `rotate(${index * 45}deg) translate(100px) rotate(-${index * 45}deg)`
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Legend */}
        <div className="skill-legend">
          <h4 className="legend-title">PROFICIENCY SCALE</h4>
          <div className="legend-items">
            {Object.entries(skillLevels).map(([key, level]) => (
              <div key={key} className="legend-item">
                <span className="legend-stars" style={{ color: level.color }}>
                  {level.icon}
                </span>
                <span className="legend-label" style={{ color: level.color }}>
                  {level.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to convert level to progress width
const getProgressWidth = (level) => {
  const widthMap = {
    "EXPERT": 95,
    "ADVANCED": 80,
    "INTERMEDIATE": 65,
    "BEGINNER": 45,
    "EXPLORING": 30
  };
  return widthMap[level] || 50;
};

export default Skills;