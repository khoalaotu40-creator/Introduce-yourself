/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Introduce from './components/Introduce';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans antialiased">
      <Hero />
      <Introduce />
      <Contact />
    </div>
  );
}
