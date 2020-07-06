import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <button onClick={() => window.scrollTo(0, 0)} className="logo">
        SP-<span>W</span>
      </button>
      <ul className="nav-link">
        <Link activeClass="active" to="about" smooth={true} offset={-50} duration={0}>
          about
        </Link>
        <Link activeClass="active" to="projects" smooth={true} offset={0} duration={0}>
          projects
        </Link>
        <Link activeClass="active" to="contact" smooth={true} offset={0} duration={0}>
          contact
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
