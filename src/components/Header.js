import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
      <h1>
          My Road Trip
        </h1>
        <p className="header-subtitle">
          <a href="https://github.com/akap97/trip-planner">
            <FaGithub />
            View on Github
          </a>
        </p>
      </Container>
    </header>
  );
};

export default Header;
