
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80" 
          alt="Soulful Mountain Awakening" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Darker gradient overlay to ensure text legibility against lighter green backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-sm font-bold uppercase tracking-wider">India's Most Loved Travel Community</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            More Than a Trip. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">A Soulful Awakening.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
            Have you ever lived the journey you only saw in your dreams? We don’t just book flights; we curate experiences that speak to who you are.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#trips" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-orange-500/30 text-lg text-center">
              Book Your Dream
            </a>
            <a href="#about" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-10 py-4 rounded-2xl font-bold transition-all text-lg flex items-center justify-center gap-2 group">
              Our Story
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
