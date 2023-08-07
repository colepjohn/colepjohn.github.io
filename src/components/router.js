import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/homepage';
import Projects from '../pages/projects';

function AppRouter() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRouter;