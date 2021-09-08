import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';

import './styles/app.css';

function App() {
  const [showAbout, setShowAbout] = useState(false);

  const openAbout = () => {
    setShowAbout(true);
  };

  const closeAbout = () => {
    setShowAbout(false);
  };

  return (
    <div className="App">
      <Header openAbout={openAbout} />

      {showAbout ? <About closeAbout={closeAbout} /> : ''}
    </div>
  );
}

export default App;
