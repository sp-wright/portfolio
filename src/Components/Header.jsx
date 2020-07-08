import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <div id="header" className="header-container">
        <h1>
          SP-<span>W</span>
        </h1>
        <h3>&#60;web developer&#62;</h3>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={0}>
          <button className="main-btn">projects</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
