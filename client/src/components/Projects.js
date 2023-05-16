import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/projects`)
    .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div id="projects">
      <h1>PROJECTS</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt="Project" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
