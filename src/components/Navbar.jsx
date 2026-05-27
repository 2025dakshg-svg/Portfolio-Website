import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DownloadLink from './DownloadLink';
import { DOWNLOADS } from '../constants/downloads';
import '../styles/Navbar.css';

const Navbar = () => {
  const { resume } = DOWNLOADS;

  const navLinkClass = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <nav className="navbar">
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
            <a href="/#experience">Experience</a>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/connect" className={({ isActive }) =>
              isActive ? 'nav-connect active' : 'nav-connect'
            }>
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

export default Navbar;
