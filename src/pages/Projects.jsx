import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import '../styles/pages/Projects.css';

const Projects = () => {
  const { projects, stats } = portfolioData;

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div className="header-left">
          <div className="sidebar">
            <nav className="projects-nav">
              <a href="#dashboard" className="nav-item">
                <span>📊</span> DASHBOARD
              </a>
              <a href="#projects" className="nav-item active">
                <span>📁</span> PROJECTS
              </a>
              <a href="/about" className="nav-item">
                <span>📋</span> BIO
              </a>
              <a href="/connect" className="nav-item">
                <span>✉️</span> CONTACT
              </a>
              <a href="#logs" className="nav-item">
                <span>📝</span> LOGS
              </a>
            </nav>
          </div>
        </div>

        <div className="header-right">
          <div className="architecture-badge">ARCHITECTURE_ARCHIVE_2024</div>
          <h1>
            ENGINEERING THE <span className="highlight">NEXT FRONTIER</span>
          </h1>
          <p>
            A selection of proprietary models and open-source contributions focusing on natural language processing, autonomous systems, and advanced neural architectures.
          </p>
        </div>
      </div>

      <div className="projects-container">
        <div className="featured-projects">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="project-card featured"
              >
                <div className="project-image"></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.caseStudy && (
                    <span className="case-study-link">VIEW CASE STUDY →</span>
                  )}
                </div>
              </Link>
            ))}
        </div>

        <div className="projects-grid">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="project-card"
              >
                <div className="project-image"></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </div>

        <section className="ready-section">
          <div className="ready-content">
            <div className="ready-stat">
              <div className="stat-value">{stats.projects}</div>
              <p>SYSTEM_DESIGNS</p>
            </div>
            <div className="ready-text">
              <h2>
                READY FOR THE <span className="highlight">NEXT CHALLENGE?</span>
              </h2>
              <p>
                My research focuses on bridging the gap between theoretical AI models and production-ready systems that solve real-world problems at scale.
              </p>
            </div>
            <div className="ready-buttons">
              <button type="button" className="btn-view">
                VIEW FULL LOGS
              </button>
              <button type="button" className="btn-request">
                REQUEST_TECHNICAL_SPEC
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
