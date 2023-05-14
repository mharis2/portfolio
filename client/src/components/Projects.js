import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/projects')
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
            <img src="https://via.placeholder.com/300" alt="Project" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            </div>
            <a href={project.link} className="view-project">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
