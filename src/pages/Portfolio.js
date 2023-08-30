import React from 'react';
import Project from '../components/Project';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
        <Project
          title="Project 1"
          imageSrc="./assets/images/project1.jpg"
          description="Description for Project 1."
        />
        {/* Add more Project components here */}
      </div>
    </div>
  );
}

export default Portfolio;
