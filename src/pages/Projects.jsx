import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import '../styles/pages/Projects.css';

const Projects = () => {
  const { projects  } = portfolioData;

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div className="header-right">
          <div className="architecture-badge"></div>
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
                <div className="project-image">
                  {project.imageUrl && (
                    <img src={project.imageUrl} alt={project.title} className="project-img" />
                  )}
                </div>
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
                <div className="project-image">
                  {project.imageUrl && (
                    <img src={project.imageUrl} alt={project.title} className="project-img" />
                  )}
                </div>
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

      </div>
    </div>
  );
};

export default Projects;
