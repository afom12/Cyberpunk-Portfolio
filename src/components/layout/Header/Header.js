// src/components/layout/Header/Header.js
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'WORK' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <header className={`cyber-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-glitch"></div>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="cyber-logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">A.K</span>
            <div className="logo-glow"></div>
          </div>

          {/* Navigation */}
          <nav className={`cyber-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {navItems.map(item => (
                <li key={item.id}>
                  <button 
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="link-text">{item.label}</span>
                    <span className="link-hover"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="header-actions">
            {/* Theme Toggle */}
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <div className="toggle-track">
                <div className="toggle-thumb">
                  {isDark ? (
                    <span className="theme-icon">🌙</span>
                  ) : (
                    <span className="theme-icon">☀️</span>
                  )}
                </div>
              </div>
              <span className="theme-text">
                {isDark ? 'DARK' : 'LIGHT'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className={`cyber-menu-btn ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;