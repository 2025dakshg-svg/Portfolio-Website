import React from 'react';
import { Link } from 'react-router-dom';
import DownloadLink from '../DownloadLink';
import SoftAurora from '../SoftAurora';
import { DOWNLOADS } from '../../constants/downloads';
import '../../styles/Hero.css';

const Hero = () => {
  const { cv } = DOWNLOADS;

  return (
    <section className="hero">
      <div className="hero-aurora" aria-hidden="true">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
      </div>
      <div className="hero-content">
        <p className="system-init">SYSTEM INITIALIZATION</p>
        <h1 className="hero-title">Daksh Ghandat</h1>
        <h2 className="hero-subtitle">Aspiring AI Engineer</h2>
        <p className="hero-description">
          Architecting the future through digital innovation | Building high-performance neural networks and sophisticated user experiences.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn-primary">
            View My Work →
          </Link>
          <DownloadLink
            href={cv.href}
            filename={cv.filename}
            label={cv.label}
            className="btn-secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
