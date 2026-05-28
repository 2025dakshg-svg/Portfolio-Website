import React from 'react';
import '../../styles/CoreCompetencies.css';

const CoreCompetencies = () => {
  const competencies = [
    {
      icon: '',
      title: 'Frontend Development',
      description: 'React js , TypeScript, Tailwind CSS',
    },
    {
      icon: '',
      title: 'Backend Development',
      description: 'C++, Python, Node.js',
    },
    {
      icon: '',
      title: 'DSA',
      description: 'Data Structures and Algorithms',
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
