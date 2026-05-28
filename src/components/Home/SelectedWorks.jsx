import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SelectedWorks.css';

const SelectedWorks = () => {
  const works = [
    {
      id: 1,
      title: 'DAMS Aerospace',
      description: 'A fully responsive aerospace company website with hero animations, launch booking system, and modern e-commerce shop — built with HTML, CSS & JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: '/downloads/dams-aerospace.png',
    },
    {
      id: 2,
      title: 'Percentage Calculator',
      description: 'A suite of Python-based calculator programs, featuring a console-based percentage calculator and a basic arithmetic calculator with robust input and zero-division handling.',
      tags: ['Python', 'Mathematics', 'CLI'],
      imageUrl: '/downloads/percentage-calculator.png',
    },
  ];

  return (
    <section className="selected-works">
      <div className="works-header">
        <h2>Selected Works</h2>
        <Link to="/projects" className="view-all">
          VIEW ALL WORKS →
        </Link>
      </div>
      <div className="works-grid">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <div className="work-placeholder">
              {work.imageUrl && (
                <img src={work.imageUrl} alt={work.title} className="work-img" />
              )}
            </div>
            <div className="work-content">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <div className="work-tags">
                {work.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;
