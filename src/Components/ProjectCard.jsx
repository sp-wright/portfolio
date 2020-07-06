import React from 'react';

const ProjectCard = (props) => {
  const { name, description, img, tech, source, gitHub } = props.info;

  return (
    <div onClick={(e) => props.clickModal(e.target.id)} className="projects-card" id={props.id}>
      <div className="projects-card-container">
        <h3>{name}</h3>
        <img src={img} alt={name} />
        <p className="projects-text">{description}</p>
        <div className="links">
          <p className="tech-text">{tech}</p>
          <a href={source}>
            <i className="fas fa-laptop"></i>
          </a>
          <a href={gitHub}>
            <i className="fab fa-lg fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
