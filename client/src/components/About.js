import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about">
      <h1>ABOUT</h1>
      <div className="about-content">
        <div className="profile-photo-container">
          <img src="/images/profile.png" className="profile-photo" alt="Profile" />
          {/* <p className="fun-fact"> <strong>Fun Fact:</strong> As an avid gamer, I achieved Grandmasters in League of Legends, and also had the honor of captaining my University's competetive team in the same game!</p> */}
        </div>
        <div className="about-details">
          <div className="about-card">
            <h2>Education & Profession</h2>
            <p>Software engineer with a Bachelor of Computer Science and a Mathematics Minor from the University of Alberta. My expertise lies in end-to-end development, from crafting intuitive user interfaces to developing efficient backend services. With a comprehensive skill set spanning multiple languages and tools, I am equipped to build robust, scalable applications in diverse domains.</p>
          </div>
          <div className="about-card">
            <h2>Experience</h2>
            <p>At Areto Labs, I played a pivotal role in spearheading the development of a subscription service for a Slack application, significantly boosting projected sales. In addition, my responsibilities included ensuring the application's compatibility with diverse systems, proactively troubleshooting issues, and consistently delivering enhancements. More recently, I collaborated with Shaquille O'Neal's management to create Astralsnft.io, an innovative NFT website.</p>
          </div>
          <div className="about-card">
            <h2>Technical Skills</h2>
            <p>
              <strong>Backend:</strong> Flask, Django, Express.<br/>
              <strong>Frontend:</strong> React, Node.js.<br/>
              <strong>Databases:</strong> PostgreSQL, MongoDB.<br/>
              <strong>Languages & Infrastructure:</strong> Python, Java, JavaScript, Golang, SQL, Docker, Terraform, Kubernetes, GCP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
