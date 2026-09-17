// src/components/sections/Experience/Experience.js
import React from 'react';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    role: 'Full-Stack Developer Intern',
    org: 'Alyah Technologies (Alyah Software Company PLC)',
    location: 'Bahir Dar, Ethiopia',
    period: 'Feb 2025 – Sep 2025',
    status: 'INTERNSHIP',
    bullets: [
      // Placeholder — replace with your real day-to-day responsibilities and
      // any concrete outcomes from the internship (features shipped, bugs
      // fixed, team size, tech stack used day-to-day, etc.)
      'Contributed to the development of full-stack features as part of the engineering team — add your specific responsibilities here.',
      'Worked with the team\'s stack (add details, e.g. React/Node.js/MongoDB) to build and maintain application features.',
      'Add a concrete outcome or contribution you\'re proud of from this internship.'
    ]
  },
  {
    id: 2,
    role: 'Freelance Frontend Developer',
    org: 'Self-employed',
    location: 'Remote',
    period: '2024 – Present',
    status: 'ONGOING',
    bullets: [
      'Designed and developed responsive websites using React, Tailwind CSS, and JavaScript for small businesses and student projects.'
    ]
  },
  {
    id: 3,
    role: 'Volunteer Developer — University Projects',
    org: 'Bahir Dar University',
    location: 'Bahir Dar, Ethiopia',
    period: '2023 – Present',
    status: 'ONGOING',
    bullets: [
      'Built multiple academic and real-world projects, including a task management suite and a child social-media safety app.',
      'Contributed to team-based software development, handling frontend design, API integration, and testing.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="cyber-grid"></div>
      <div className="container">
        <h2 className="section-title">EXPERIENCE</h2>

        <div className="timeline">
          {experienceData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-org">{item.org} · {item.location}</p>
                  </div>
                  <span className="timeline-status">{item.status}</span>
                </div>
                <p className="timeline-period">{item.period}</p>
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
