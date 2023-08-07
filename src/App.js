import './App.css';
import AppRouter from './components/router';
import Navigation from './components/navigation';

import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
