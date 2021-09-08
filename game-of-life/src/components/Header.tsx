import React from 'react';

interface Props {
  openAbout(): void;
}

const Header: React.FC<Props> = (props) => {
  return (
    <header>
      <ul className="header-info">
        <li>
          <a
            href="https://github.com/beast88/tdd-game-of-life"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>Conway's Game of Life</li>
        <li
          className="about-link"
          onClick={(e) => {
            props.openAbout();
          }}
        >
          About
        </li>
      </ul>
    </header>
  );
};

export default Header;
