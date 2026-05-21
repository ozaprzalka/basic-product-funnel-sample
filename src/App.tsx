import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from '@/pages/LandingPage';
import NotFoundPage from '@/pages/NotFoundPage';

const ProductPage = lazy(() => import('@/pages/ProductPage'));
const CheckoutPage = lazy(() => import('@/pages/CheckoutPage'));

const FallbackLoader = () => <div>Loading...</div>;

export default function App() {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/product" element={<ProductPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
