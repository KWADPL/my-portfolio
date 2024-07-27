import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faStar, faCode, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FontAwesomeIcon icon={faStar} /> About Me
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <FontAwesomeIcon icon={faCode} /> Projects
            </Link>
          </li>
          <li><Link to="/contact">
          <FontAwesomeIcon icon={faCircleInfo} /> Contact </Link> 
          </li>
        </ul>
      </nav>
      <div className="animated-text-wrapper">
        <ul className="animated-text">
          <li>
            <span className="typing">Junior</span>
          </li>
          <li>
            <span className="typing">Frontend</span>
          </li>
          <li>
            <span className="typing">Developer</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
