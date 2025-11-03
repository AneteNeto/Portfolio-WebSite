import React, { Suspense } from 'react'
import Portfolio from './components/Portfolio';

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Portfolio/>
    </Suspense>
  );
}6