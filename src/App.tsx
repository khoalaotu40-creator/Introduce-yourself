/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduce from './components/Introduce';
import Contact from './components/Contact';
import Versions from './pages/Versions';

function HomePage() {
  return (
    <>
      <Hero />
      <Introduce />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black font-sans antialiased flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/versions" element={<Versions />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
