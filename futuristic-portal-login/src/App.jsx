import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FuturisticLoginPage from './pages/FuturisticLoginPage'; 


function App() {
  return (
    <Routes>

      <Route path="/" element={<FuturisticLoginPage />} /> 

    </Routes>
  );
}

export default App;