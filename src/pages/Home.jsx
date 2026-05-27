import React from 'react';
import {
  Hero,
  TheNeuralArchitect,
  CoreCompetencies,
  SelectedWorks,
  ChronologicalSequence,
  DeployAI,
} from '../components/Home';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <TheNeuralArchitect />
      <CoreCompetencies />
      <SelectedWorks />
      <ChronologicalSequence />
      <DeployAI />
    </div>
  );
};

export default Home;
