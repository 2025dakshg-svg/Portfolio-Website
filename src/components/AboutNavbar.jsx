import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DownloadLink from './DownloadLink';
import { DOWNLOADS } from '../constants/downloads';
import '../styles/Navbar.css';

const AboutNavbar = () => {
  const { resume } = DOWNLOADS;

  const navLinkClass = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <nav className="navbar navbar-about">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          NEURAL_ARCHITECT
        </Link>
        <ul className="nav-menu">
          <li>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <a href="#academic-path">Academic Path</a>
          </li>
          <li>
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/connect"
              className={({ isActive }) =>
                isActive ? 'nav-connect active' : 'nav-connect'
              }
            >
              Connect
            </NavLink>
          </li>
        </ul>
        <DownloadLink
          href={resume.href}
          filename={resume.filename}
          label={`${resume.label.toUpperCase()} →`}
          className="cta-button"
        />
      </div>
    </nav>
  );
};

export default AboutNavbar;
