import React from 'react';
import './Project.css';

function Project({ title, imageSrc, description }) {
  return (
    <section>
      <h2>{title}</h2>
      <img src={imageSrc} alt={title} />
      <p>{description}</p>
    </section>
  );
}

export default Project;
