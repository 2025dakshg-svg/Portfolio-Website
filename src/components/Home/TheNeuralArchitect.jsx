import React from 'react';
import '../../styles/TheNeuralArchitect.css';

const TheNeuralArchitect = () => {
  return (
    <section className="neural-architect">
      <div className="section-label">+ DEEP LEARNING</div>
      <div className="neural-content">
        <div className="neural-text">
          <h3>The Neural Architect</h3>
          <p>
            I am a software engineer focused on building the architectures that power the future. I build beautiful, performant applications and scale them with complex systems. Currently building at Synapse.
          </p>
          <p className="tech-stack">
            React • Typescript • Python • Neural Networks • TensorFlow • JAX • Pytorch
          </p>
        </div>
        <div className="neural-image">
          <div className="neural-placeholder">
            <div className="gradient-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheNeuralArchitect;
