// src/components/VoiceControl/VoiceControl.js
import React, { useState } from 'react';
import './VoiceControl.css';

const VoiceControl = () => {
  const [isListening, setIsListening] = useState(false);
  const [command, setCommand] = useState('');

  const handleVoiceCommand = (text) => {
    setCommand(text);
    
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    const foundSection = sections.find(section => 
      text.toLowerCase().includes(section)
    );
    
    if (foundSection) {
      const element = document.getElementById(foundSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Auto stop after command
    setTimeout(() => {
      setIsListening(false);
      setCommand('');
    }, 2000);
  };

  const toggleListening = () => {
    if (!isListening) {
      setCommand('Speak now...');
      // Simulate voice recognition since Web Speech API might not work everywhere
      setTimeout(() => {
        const commands = [
          'scroll to projects',
          'go to about section', 
          'show me skills',
          'take me home',
          'contact me now'
        ];
        const randomCommand = commands[Math.floor(Math.random() * commands.length)];
        handleVoiceCommand(randomCommand);
      }, 1000);
    }
    setIsListening(!isListening);
  };

  return (
    <div className="voice-control">
      <button 
        className={`voice-btn ${isListening ? 'listening' : ''}`}
        onClick={toggleListening}
      >
        <div className="voice-pulse"></div>
        <span className="voice-icon">🎤</span>
        <span className="voice-text">
          {isListening ? 'LISTENING...' : 'VOICE CONTROL'}
        </span>
      </button>
      
      {isListening && (
        <div className="voice-feedback">
          <div className="voice-waves">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
          <p className="voice-transcript">{command}</p>
        </div>
      )}
    </div>
  );
};

export default VoiceControl;