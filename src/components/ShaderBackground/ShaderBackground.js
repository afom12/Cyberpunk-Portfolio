// src/components/ShaderBackground/ShaderBackground.js
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ShaderBackground.css';

const ShaderBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    // Respect the visitor's motion preference — render a static frame only.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    let time = 0;
    let isTabVisible = !document.hidden;
    let frameId;
    const particles = [];

    // Gold-toned color scheme for both dark and light mode
    const colors = isDark 
      ? ['#d4af37', '#e8c766', '#f4d580', '#9c7a2a'] // Dark mode gold
      : ['#a9791a', '#c99a2e', '#bf9020', '#7a5a14']; // Light mode gold

    const bgColor = isDark ? 'rgba(6, 11, 22, 0.05)' : 'rgba(255, 255, 255, 0.02)';
    const gridColor = isDark ? 'rgba(212, 175, 55, 0.1)' : 'rgba(169, 121, 26, 0.1)';

    // Create floating particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      time += 0.01;
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;
      
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX + Math.sin(time + particle.x * 0.01) * 0.3;
        particle.y += particle.speedY + Math.cos(time + particle.y * 0.01) * 0.3;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      // Draw connections between particles
      particles.forEach((a, i) => {
        particles.forEach((b, j) => {
          if (i !== j) {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${isDark ? '212, 175, 55' : '169, 121, 26'}, ${0.2 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        });
      });

      if (isTabVisible) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !prefersReducedMotion) {
        animate();
      }
    };

    // Reduced-motion visitors get one still frame instead of an endless loop.
    if (prefersReducedMotion) {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    } else {
      animate();
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(frameId);
    };
  }, [isDark]); // Re-run when theme changes

  return <canvas ref={canvasRef} className="shader-background" />;
};

export default ShaderBackground;