import React from 'react';
import '../../styles/TheNeuralArchitect.css';

const TheNeuralArchitect = () => {
  return (
    <section className="neural-architect">
      <div className="section-label">+ DEEP LEARNING</div>
      <div className="neural-content">
        <div className="neural-text">
          <h3>2025DAKSHG-SVG</h3>
          <p>
            I am a software engineer focused on building the architectures that power the future. I build beautiful, performant applications and scale them with complex systems.
          </p>
          <p className="tech-stack">
            React • Typescript • Python • Node js ... and more!
          </p>
        </div>
        <div className="neural-image">
          <div className="neural-placeholder">
            <img src="/downloads/neural-architect.jpeg" alt="Neural Architect" className="neural-bg-image" />
            <div className="gradient-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheNeuralArchitect;
