import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import GameBoard from './components/Game';
import Landing from './components/Landing';

import './styles/app.css';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [number, setNumber] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const i = parseInt(e.target.value);
    setNumber(i);
  };

  const handleSubmit = () => {
    setShowLanding(false);
  };

  const openAbout = () => {
    setShowAbout(true);
  };

  const closeAbout = () => {
    setShowAbout(false);
  };

  return (
    <div className="App">
      <Header openAbout={openAbout} />

      {showLanding ? (
        <Landing
          number={number}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <GameBoard number={number} />
      )}

      {showAbout ? <About closeAbout={closeAbout} /> : ''}
    </div>
  );
}

export default App;
