// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PlayfulLoginPage from './pages/PlayfulLoginPage'; // Sadece bunu import ediyoruz

function App() {
  return (
    <Routes>
      {/* Ana sayfa olarak neşeli giriş ekranını ayarla */}
      <Route path="/" element={<PlayfulLoginPage />} /> 
      
      {/* Gelecekte buraya başka sayfalar ekleyebilirsiniz */}
    </Routes>
  );
}

export default App;