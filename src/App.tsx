import { Routes, Route } from 'react-router-dom';

import LandingPage from '@/pages/LandingPage';
import ProductPage from '@/pages/ProductPage';
import CheckoutPage from '@/pages/CheckoutPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/product" element={<ProductPage />} />

      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}
