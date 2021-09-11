import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import GameBoard from './components/Game';

import './styles/app.css';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const number = 10;

  const openAbout = () => {
    setShowAbout(true);
  };

  const closeAbout = () => {
    setShowAbout(false);
  };

  return (
    <div className="App">
      <Header openAbout={openAbout} />
      <GameBoard number={number} />

      {showAbout ? <About closeAbout={closeAbout} /> : ''}
    </div>
  );
}

export default App;
