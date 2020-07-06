import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="logo">
        contac<span>t</span>
      </h1>
      <div className="contact-links">
        <a href="mailto:stevewright54@gmail.com?subject=Contact">
          <i className="fas fa-2x fa-at"></i>
        </a>
        <a href="https://github.com/sp-wright">
          <i className="fab fa-2x fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sp-wright/">
          <i className="fab fa-2x fa-linkedin-in"></i>
        </a>
      </div>
      <div className="signature">
        code & design <span>SP-Wright</span>
      </div>
    </section>
  );
};

export default Contact;
