import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="#home">MUHAMMAD HARIS</a>
      </div>
      <div className={isOpen ? 'nav-links mobile-nav-links' : 'nav-links'}>
        <a href="#projects">PROJECTS</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className="right">
        <a href="https://github.com/mharis2" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size='lg' />
        </a>
        <a href="https://www.linkedin.com/in/mharis2" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size='lg' />
        </a>
        <a href="/pdfs/Haris_resume.pdf" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faFileAlt} size = 'lg'/>
</a>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
