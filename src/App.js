import './App.css';
import HomePage from './pages/homepage';
import Navigation from './components/navigation';
import Projects from './pages/projects';

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='projects' element={<Projects />} />
          </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
