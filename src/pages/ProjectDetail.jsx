import React from 'react';
import { useParams } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import '../styles/pages/ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.projects.find((p) => p.id === parseInt(id, 10));

  const challengeItems = [
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Building systems that handle massive throughput with minimal latency overhead.',
    },
    {
      icon: '🔧',
      title: 'Architecture Design',
      description: 'Designing scalable, maintainable architectures for production-grade systems.',
    },
    {
      icon: '🔗',
      title: 'Integration',
      description: 'Seamless integration with existing systems and technologies.',
    },
  ];

  const architectureComponents = [
    {
      icon: 'I',
      name: 'Input Layer',
      description: 'Data ingestion and preprocessing pipeline',
    },
    {
      icon: 'C',
      name: 'Core Engine',
      description: 'Main processing and computation layer',
    },
    {
      icon: 'O',
      name: 'Output API',
      description: 'Results distribution and consumer interfaces',
    },
  ];

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="detail-header">
          <h1>Project Not Found</h1>
          <p>The project you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="detail-header">
        <div className="detail-header-top">
          <span className="category-label"></span>
        </div>

        <h1>{project.title}</h1>
        <p className="detail-description">
          {project.fullDescription || project.description}
        </p>

        <div className="detail-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="detail-image">
        <div className={`image-placeholder ${project.image || ''}`}>
          {project.imageUrl && (
            <img src={project.imageUrl} alt={project.title} className="detail-img" />
          )}
        </div>
      </div>

      <div className="challenge-section">
        <h2>The Challenge_</h2>
        <div className="challenge-items">
          {challengeItems.map((item, idx) => (
            <div key={idx} className="challenge-item">
              <span className="challenge-icon">{item.icon}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="architecture-section">
        <h2>Technical Architecture</h2>
        <div className="architecture-grid">
          {architectureComponents.map((comp, idx) => (
            <div key={idx} className="arch-card">
              <div className="arch-icon">{comp.icon}</div>
              <h3>{comp.name}</h3>
              <p>{comp.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-section">
        <h2>Performance_Stats</h2>
        <div className="stats-grid">
          {project.stats &&
            Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="stat-card">
                <div className="stat-label">{key.toUpperCase()}</div>
                <div className="stat-value">{value}</div>
              </div>
            ))}
        </div>
        <p className="chart-description">
          Advanced performance metrics showing system optimization and reliability
        </p>
      </div>


    </div>
  );
};

export default ProjectDetail;
