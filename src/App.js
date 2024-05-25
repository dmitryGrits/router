
import React from'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AboutPage' element={<AboutPage />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
