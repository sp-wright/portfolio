import React from 'react';
import myProjects from '../myProjects';

const Modal = (props) => {
  const { name, description, img, tech, source, gitHub } = myProjects[props.id];

  return (
    <div className="modal">
      <section className="modal-container">
        <div onClick={() => props.closeModal()} className="cross">
          <i className="close fas fa-3x fa-times"></i>
        </div>
        <div>
          <h3>
            <span>{name}</span>{' '}
          </h3>
        </div>
        <div>
          <img src={img} alt={name} />
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <h4 className="tech-text">{tech}</h4>
          <a href={source}>
            <i className="fas fa-2x fa-laptop"></i>
          </a>
          <a href={gitHub}>
            <i className="fab fa-2x fa-github"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Modal;
