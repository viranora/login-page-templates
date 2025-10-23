import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LivingLoginPage from './pages/LivingLoginPage';

function App() {
  return (
    <Routes>
      {/* Ana sayfa olarak animasyonlu giriş ekranını ayarla */}
      <Route path="/" element={<LivingLoginPage />} />
      
      {/* Gelecekte buraya başka sayfalar ekleyebilirsiniz: */}
      {/* <Route path="/magnetic-navbar" element={<MagneticNavbarPage />} /> */}
      {/* <Route path="/bento-dashboard" element={<BentoDashboardPage />} /> */}
    </Routes>
  );
}

export default App;