
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">TS</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Travel<span className="text-orange-500">Soul</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#trips" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Trips</a>
            <a href="#community" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">Community</a>
            <a href="#ai-planner" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">AI Planner</a>
            <a href="#about" className="text-slate-600 hover:text-orange-500 font-medium transition-colors">About Us</a>
            <a href="#join" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition-all hover:shadow-lg">
              Join Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
          <a href="#trips" onClick={closeMenu} className="block px-4 py-2 text-slate-600 hover:text-orange-500 font-medium">Trips</a>
          <a href="#community" onClick={closeMenu} className="block px-4 py-2 text-slate-600 hover:text-orange-500 font-medium">Community</a>
          <a href="#ai-planner" onClick={closeMenu} className="block px-4 py-2 text-slate-600 hover:text-orange-500 font-medium">AI Planner</a>
          <a href="#about" onClick={closeMenu} className="block px-4 py-2 text-slate-600 hover:text-orange-500 font-medium">About Us</a>
          <a href="#join" onClick={closeMenu} className="block w-full text-center bg-slate-900 text-white px-6 py-3 rounded-full font-semibold">
            Join Community
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
