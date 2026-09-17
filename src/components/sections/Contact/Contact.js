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

  const CONTACT_EMAIL = "ketselaafomiya@gmail.com";

  // UPDATE THESE WITH YOUR REAL LINKS
  const contactMethods = [
    {
      icon: "📧",
      title: "EMAIL",
      value: CONTACT_EMAIL,
      action: `mailto:${CONTACT_EMAIL}`
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
      value: "Addis Ababa, Ethiopia", // Change to your location
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
      url: "https://twitter.com/@Afomi_K", // Change to your Twitter
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // No backend is wired up yet, so this opens the visitor's own email
    // client with everything pre-filled — an honest "send" that actually
    // reaches you, instead of faking a success message.
    const subjectLine = formData.subject || `Portfolio contact from ${formData.name}`;
    const bodyLines = [
      formData.message,
      '',
      `— ${formData.name} (${formData.email})`
    ].join('\n');

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyLines)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSending(false);
    }, 800);
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
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                    placeholder=" " // Important for the label animation
                  />
                  <label htmlFor="contact-name" className="input-label">NAME</label>
                  <div className="input-glow"></div>
                </div>
                
                <div className="input-group">
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                    placeholder=" "
                  />
                  <label htmlFor="contact-email" className="input-label">EMAIL</label>
                  <div className="input-glow"></div>
                </div>
                
                <div className="input-group">
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                    placeholder=" "
                  />
                  <label htmlFor="contact-subject" className="input-label">SUBJECT</label>
                  <div className="input-glow"></div>
                </div>
                
                <div className="input-group">
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="cyber-input textarea"
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="contact-message" className="input-label">MESSAGE</label>
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