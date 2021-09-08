import React from 'react';

interface Props {
  closeAbout(): void;
}

const About: React.FC<Props> = (props) => {
  return (
    <div className="about-container" onClick={() => props.closeAbout()}>
      <section className="about-section">
        <button>
          <i className="far fa-times-circle"></i>
        </button>

        <h2>Conway's Game of Life</h2>
        <p>
          The Game of Life is a zero player game. How it progresses is
          determined by the inital state of the game.{' '}
          <a
            href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
            target="_blank"
            rel="noreferrer"
          >
            Here's the wiki article.
          </a>
        </p>

        <h3>How To Play</h3>
        <p>
          Select the size of the grid you want to play with. Then select cells
          to bring them to life. You can select as many cells as you wish. Once
          you're ready click the start button to begin the simulation. How long
          will your cells live?
        </p>
      </section>
    </div>
  );
};

export default About;
