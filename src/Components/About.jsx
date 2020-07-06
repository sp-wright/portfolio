import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about-title">
        <h1 className="logo">
          abou<span>t</span>
        </h1>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h2>hi, my name is stephen and i am a full-stack web developer specialising in front-end development.</h2>
          <h2>i have experience working with front-end technologies like;</h2>
          <h2>
            <span>HTML, CSS, JavaScript, React, jQuery, Bootstrap, RESTful API integration</span>
          </h2>
          <h2>on the back-end i have worked with;</h2>
          <h2>
            <span>Node.js, Express.js, mongoDB, Mongoose, EJS, RESTful APIs, Git/GitHub</span>
          </h2>
          <h2>i have a long history in the visual & creative sectors, having worked as a photographer and have a professional working experience with;</h2>
          <h2>
            <span>Adobe Creative Suite</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
