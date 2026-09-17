// src/App.js
import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects/Projects';
import Skills from './components/sections/Skills/Skills';
import Experience from './components/sections/Experience/Experience';
import Education from './components/sections/Education/Education';
import Contact from './components/sections/Contact/Contact';
import ShaderBackground from './components/ShaderBackground/ShaderBackground';
import ParticleCursor from './components/ParticleCursor/ParticleCursor';
import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <ShaderBackground />
      <ParticleCursor />
      
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;