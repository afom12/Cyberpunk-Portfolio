// src/components/sections/Education/Education.js
import React from 'react';
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: "Bachelor's Degree in Software Engineering",
    school: 'Bahir Dar University',
    period: '2022 – 2026',
    primary: true
  },
  {
    id: 2,
    degree: "Bachelor's Degree in Management",
    school: 'TIS Abbay College',
    period: '2023 – 2026',
    primary: false
  }
];

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">EDUCATION</h2>

        <div className="education-grid">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className={`education-card ${edu.primary ? 'primary' : ''}`}
            >
              <div className="education-icon">🎓</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-school">{edu.school}</p>
              <p className="education-period">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
