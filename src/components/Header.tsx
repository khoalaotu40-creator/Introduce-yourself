import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-serif italic text-xl tracking-wide hover:text-brand transition-colors">
          KhoaTruong
        </Link>
      </div>
    </header>
  );
}
