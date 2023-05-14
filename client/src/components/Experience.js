import React, { useState, useEffect } from 'react';
import './Experience.css';

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/experiences')
      .then(response => response.json())
      .then(data => setExperiences(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div id="experience">
      <h1>Work Experience</h1>
      {experiences.map(experience => (
        <div className="experience-card" key={experience.id}>
          <h2>{experience.role} at {experience.company}</h2>
          <h3>{experience.duration} | {experience.location}</h3>
          <ul>
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
