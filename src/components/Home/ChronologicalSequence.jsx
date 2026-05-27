import React from 'react';
import '../../styles/ChronologicalSequence.css';

const ChronologicalSequence = () => {
  const timeline = [
    {
      id: 1,
      year: '2024',
      title: 'The First Code',
      description: 'Begin by trying the fundamentals of computer science and the basics.',
    },
    {
      id: 2,
      year: '2024',
      title: 'Neural Architecture',
      description: 'Deep dive into machine learning architectures and neural network design patterns.',
    },
    {
      id: 3,
      year: '2025',
      title: 'AI Implementation',
      description: 'Implementing state-of-the-art models and sophisticated algorithms for real-world applications.',
    },
  ];

  return (
    <section className="chronological-sequence" id="experience">
      <h2>Chronological Sequence</h2>
      <div className="timeline">
        {timeline.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-circle"></div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChronologicalSequence;
