import React from 'react';
import { DEPLOY_AI_URL } from '../../constants/downloads';
import '../../styles/DeployAI.css';

const DeployAI = () => (
  <section className="deploy-ai-section" id="deploy-ai">
    <div className="deploy-ai-content">
      <p className="deploy-ai-label">NEURAL DEPLOYMENT</p>
      <h2>Deploy AI</h2>
      <p>
        Launch into production-ready AI systems — explore demos, repositories, and
        deployment pipelines built for real-world inference.
      </p>
      <a
        href={DEPLOY_AI_URL}
        className="btn-deploy-ai"
        target="_blank"
        rel="noopener noreferrer"
      >
        DEPLOY AI →
      </a>
    </div>
  </section>
);

export default DeployAI;
