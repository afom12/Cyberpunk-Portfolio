// src/components/sections/Contact/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  // UPDATE THESE WITH YOUR REAL LINKS
  const contactMethods = [
    {
      icon: "📧",
      title: "EMAIL",
      value: "afomiyaketsella12@gmail.com", // Change to your real email
      action: "mailto:afomiyaketsella12@gmail.com" // Change to your real email
    },
    {
      icon: "📱",
      title: "PHONE", 
      value: "+251-906956012", // Change to your real phone number
      action: "tel:+251 906956012" // Change to your real phone number
    },
    {
      icon: "📍",
      title: "LOCATION",
      value: "BahirDar, Ethiopia", // Change to your location
      action: "#" // You can add a Google Maps link here
    }
  ];

  // UPDATE THESE WITH YOUR REAL SOCIAL MEDIA LINKS
  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/afom12", // Change to your GitHub
      icon: "💻"
    },
    {
      platform: "LinkedIn", 
      url: "https://linkedin.com/in/afom12", // Change to your LinkedIn
      icon: "💼"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/afomi12", // Change to your Twitter
      icon: "🐦"
    },
    {
      platform: "Discord",
      url: "https://discord.com/users/afom12", // Change to your Discord
      icon: "🎮"
    },
    // You can add more platforms like:
     {
       platform: "Instagram",
       url: "https://instagram.com/afomi_ke1",
      icon: "📸"
    },
    {
  platform: "Dribbble",
  url: "https://dribbble.com/afom12", 
  icon: "🎨"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Handle form submission here
    setTimeout(() => {
      setIsSending(false);
      alert('MESSAGE TRANSMITTED SUCCESSFULLY! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="cyber-lines"></div>
      <div className="hologram-orb"></div>
      
      <div className="container">
        <h2 className="section-title">INITIATE CONNECTION</h2>
        
        <div className="contact-grid">
          {/* Contact Methods */}
          <div className="contact-methods">
            <h3 className="methods-title">DIRECT CHANNELS</h3>
            
            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <a 
                  key={method.title}
                  href={method.action}
                  className="contact-method"
                  style={{animationDelay: `${index * 0.1}s`}}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <div className="method-title">{method.title}</div>
                    <div className="method-value">{method.value}</div>
                  </div>
                  <div className="method-glow"></div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-links">
              <h4 className="social-title">NETWORK NODES</h4>
              <div className="social-grid">
                {socialLinks.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-text">{social.platform}</span>
                    <span className="social-arrow">➔</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="form-hologram">
              <div className="form-header">
                <h3 className="form-title">TRANSMISSION PROTOCOL</h3>
                <div className="form-status">
                  <div className="status-indicator"></div>
                  <span>ONLINE</span>
                </div>
              </div>

              <form className="cyber-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                    placeholder=" " // Important for the label animation
                  />
                  <label className="input-label">IDENTITY</label>
                  <div className="input-glow"></div>
                </div>
                
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                    placeholder=" "
                  />
                  <label className="input-label">FREQUENCY</label>
                  <div className="input-glow"></div>
                </div>
                
                <div className="input-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={formData.subject}
                    required
                    className="cyber-input"
                    placeholder=" "
                  />
                  <label className="input-label">SUBJECT LINE</label>
                  <div className="input-glow"></div>
                </div>
                
                <div className="input-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="cyber-input textarea"
                    placeholder=" "
                  ></textarea>
                  <label className="input-label">MESSAGE DATA</label>
                  <div className="input-glow"></div>
                </div>

                <button 
                  type="submit" 
                  className={`cyber-submit ${isSending ? 'sending' : ''}`}
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <div className="submit-loader"></div>
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      INITIATE TRANSMISSION
                      <span className="submit-arrow">➔</span>
                    </>
                  )}
                </button>
              </form>

              <div className="form-scanline"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;