// src/components/sections/Skills/Skills.js
import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'FRONTEND',
    icon: '💻',
    skills: ['HTML', 'CSS', 'JavaScript (ES6+)', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Material UI']
  },
  {
    title: 'BACKEND',
    icon: '⚡',
    skills: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    title: 'DATABASES',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase']
  },
  {
    title: 'MOBILE',
    icon: '📱',
    skills: ['Flutter', 'Dart']
  },
  {
    title: 'TOOLS & PLATFORMS',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Figma', 'Postman', 'Docker', 'Linux', 'VS Code', 'Vercel', 'Netlify']
  }
];

const Skills = () => {
  const matrixRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return undefined;

    const canvas = matrixRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    let isTabVisible = !document.hidden;
    let intervalId;

    function draw() {
      ctx.fillStyle = 'rgba(6, 11, 22, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(212, 175, 55, 0.5)';
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

    const start = () => {
      if (intervalId) return;
      intervalId = setInterval(draw, 33);
    };
    const stop = () => {
      clearInterval(intervalId);
      intervalId = null;
    };

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) start(); else stop();
    };

    start();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <canvas ref={matrixRef} className="matrix-canvas"></canvas>
      <div className="skills-overlay"></div>

      <div className="container">
        <h2 className="section-title">Tech Stack & Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
                <div className="category-glow"></div>
              </div>

              <div className="skills-chips">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
