import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 NEURAL ARCHITECT - All rights reserved</p>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <Link to="/connect">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
