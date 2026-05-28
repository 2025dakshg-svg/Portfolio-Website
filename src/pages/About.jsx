import React from 'react';
import { portfolioData } from '../data/portfolioData';
import DownloadLink from '../components/DownloadLink';
import { DOWNLOADS } from '../constants/downloads';
import '../styles/pages/Bio.css';

const About = () => {
  const { expertise, education, techStack, personal } = portfolioData;
  const { cv } = DOWNLOADS;

  return (
    <div className="bio-page">
      <div className="bio-header">
        <div className="profile-section">
          <div className="profile-image"></div>
          <div className="profile-info">
            <h1>{personal.name}</h1>
            <p className="status">● {personal.status}</p>
          </div>
        </div>
      </div>

      <div className="bio-content">
        <section className="bio-intro">
          <h2>
            Building the <span className="highlight">Neural Future</span>.
          </h2>
          <p>{personal.bio}</p>
        </section>

        <section className="core-expertise">
          <h2>Core Expertise</h2>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="expertise-skills">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="academic-path" id="academic-path">
          <h2>Academic Path</h2>
          <p className="subtitle">The Evolution of Logic at ITM Skill University</p>

          <div className="education-timeline">
            {education.map((item, index) => (
              <div key={index} className="education-item">
                <div className="timeline-marker"></div>
                <div className="education-content">
                  <span className="edu-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div
                    className={`edu-image ${
                      item.focus?.[0]?.toLowerCase().replace(/\s+/g, '-') ?? 'default'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="philosophy">
          <div className="philosophy-container">
            <h2>PHILOSOPHICAL APPROACH</h2>
            <blockquote>{personal.bio}</blockquote>
            <p>
              — {personal.name.toUpperCase()}
              {' // AI ARCHITECT'}
            </p>
          </div>
        </section>

        <section className="tech-stack" id="tech-stack">
          <h2>Tech Stack Protocol</h2>
          <div className="tech-grid">
            {techStack.map((category, index) => (
              <div key={index} className="tech-category">
                <div className="tech-icon">◆</div>
                <h3>{category.name}</h3>
                <div className="tech-items">
                  {category.items.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="download-cv">
          <DownloadLink
            href={cv.href}
            filename={cv.filename}
            label={cv.label}
            className="download-btn"
          />
        </section>
      </div>
    </div>
  );
};

export default About;
