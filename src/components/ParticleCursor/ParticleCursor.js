// src/components/ParticleCursor/ParticleCursor.js
import React, { useEffect, useRef } from 'react';
import './ParticleCursor.css';

const ParticleCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect the visitor's motion preference — skip the effect entirely.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const particles = [];
    const mouse = { x: 0, y: 0, moved: false };
    let isTabVisible = true;
    let frameId;

    // Create particles — a soft gold hue rather than a neon cyan one
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        color: `hsl(${Math.random() * 20 + 38}, 70%, 62%)`
      });
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.moved = true;
    };

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };

    const animate = () => {
      if (!isTabVisible) {
        frameId = requestAnimationFrame(animate);
        return;
      }
      if (mouse.moved) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, i) => {
          // Move towards mouse with some randomness
          particle.x += (mouse.x - particle.x) * 0.05 + particle.speedX;
          particle.y += (mouse.y - particle.y) * 0.05 + particle.speedY;

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();

          // Draw connections
          particles.forEach((otherParticle, j) => {
            if (i !== j) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(212, 175, 55, ${0.3 * (1 - distance / 100)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          });
        });
      }
      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', setCanvasSize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setCanvasSize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-cursor" />;
};

export default ParticleCursor;