import React from 'react';
import '../../styles/ChronologicalSequence.css';

const ChronologicalSequence = () => {
  const timeline = [
    {
      id: 1,
      year: '2024 — The Beginning ',
      title: 'Started My Tech Journey',
      description: 'Began my journey with zero prior knowledge while studying in 12th grade. Explored basic computer concepts, programming fundamentals, and built curiosity for technology and AI.',
    },
    {
      id: 2,
      year: '2025 — Academic & Technical Journey',
      title: 'Started Journey at ITM Skills University',
      description: 'Began my professional journey at ITM Skills University with foundational knowledge in Python and C++. Strengthened programming skills, explored problem-solving techniques, and started building real-world development understanding.',
    },
    {
      id: 3,
      year: '2026 — Growth & Development',
      title: 'B.Tech Journey & Frontend Development',
      description: 'Currently pursuing my first year of B.Tech while continuously improving my development skills. Gained strong experience in React.js and modern web technologies, building interactive and responsive applications. Actively expanding my knowledge in AI and software development.',
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
