import React from 'react';
import ProjectCard from './ProjectCard';
import myProjects from '../myProjects';

const Projects = (props) => {
  return (
    <section className="projects">
      <div className="projects-container">
        {myProjects.map((project, i) => (
          <ProjectCard info={project} key={i} id={i} clickModal={(e) => props.clickModal(e)} />
        ))}
      </div>
      <div className="projects-title">
        <h1 className="logo">
          project<span>s</span>
        </h1>
      </div>
    </section>
  );
};

export default Projects;
