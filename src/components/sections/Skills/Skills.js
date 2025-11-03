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

  const skillCategories = [
    {
      title: "FRONTEND",
      icon: "💻",
      skills: [
        { name: "React", level: 95, color: "#00f5ff" },
        { name: "JavaScript", level: 90, color: "#007acc" },
        { name: "Tailwind CSS", level: 85, color: "#bc13fe" },
        { name: "Figma", level: 80, color: "#ff00ff" },
        { name: "CSS3", level: 95, color: "#39ff14" }
      ]
    },
    {
      title: "BACKEND",
      icon: "⚡",
      skills: [
        { name: "Node.js", level: 90, color: "#00f5ff" },
        { name: "Python", level: 85, color: "#007acc" },
        { name: "PostgreSQL", level: 80, color: "#bc13fe" },
        { name: "MongoDB", level: 75, color: "#ff00ff" },
        { name: "Docker", level: 85, color: "#39ff14" }
      ]
    },
    {
      title: "Collaboration Tools",
      icon: "⚙️",
      skills: [
        { name: "Git & GitHub", level: 80, color: "#00f5ff" },
        { name: "VS Code", level: 75, color: "#007acc" },
        { name: "Cursor AI", level: 70, color: "#bc13fe" },
        { name: "Postman", level: 85, color: "#ff00ff" }
      ]
    },
    {
      title: "TECHNOLOGIES",
      icon: "🚀",
      skills: [
        { name: "AI/ML", level: 80, color: "#00f5ff" },
        { name: "Blockchain", level: 75, color: "#007acc" },
        { name: "Web3", level: 70, color: "#bc13fe" },
        { name: "Cybersecurity", level: 85, color: "#ff00ff" }
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
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
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
      </div>
    </section>
  );
};

export default Skills;