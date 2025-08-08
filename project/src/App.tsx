import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ScrollToHashElement from './components/ScrollToHashElement';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/producto/:productId" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;