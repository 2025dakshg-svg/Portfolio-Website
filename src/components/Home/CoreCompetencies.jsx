import React from 'react';
import '../../styles/CoreCompetencies.css';

const CoreCompetencies = () => {
  const competencies = [
    {
      icon: '🧠',
      title: 'AI & Machine Learning',
      description: 'Transforming visions with Language Models',
    },
    {
      icon: '⚙️',
      title: 'Large Language AI',
      description: 'LLMs, GPTs',
    },
    {
      icon: '🎯',
      title: 'Full-Stack Design',
      description: 'React, Node.js',
    },
  ];

  return (
    <section className="core-competencies">
      <h2>Core Competencies</h2>
      <div className="competencies-grid">
        {competencies.map((comp, index) => (
          <div key={index} className="competency-card">
            <div className="competency-icon">{comp.icon}</div>
            <h3>{comp.title}</h3>
            <p>{comp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreCompetencies;
