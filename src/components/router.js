import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/homepage';
import Projects from '../pages/projects';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;