import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="#home">MUHAMMAD HARIS</a>
      </div>
      <div className="center">
        <a href="#projects">PROJECTS</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className="right">
        <a href="https://github.com/mharis2" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/mharis2" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://your-resume-link.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFileAlt} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
