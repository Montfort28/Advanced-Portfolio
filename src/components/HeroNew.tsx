import React from 'react';
import { personalInfo } from '../utils/data';

const HeroNew = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] overflow-hidden pt-20 md:pt-0">
      {/* Subtle background grid/gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-clay/5 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4 animate-fadeInUp">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                <span className="block text-white animate-slideInLeft" style={{ animationDelay: '0.1s' }}>I'm Montfort.</span>
                <span className="block bg-gradient-to-r from-clay via-ivory to-clay bg-clip-text text-transparent animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                  I build things that don't break.
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                Fullstack engineer. UI/UX focused. <strong className="text-ivory">PostgreSQL & React</strong> obsessed. 
                <br className="hidden md:block" />
                Turning caffeine into clean code.
              </p>
              <p className="text-sm text-gray-400 italic">
                Yes — I drink too much coffee. Code responsibly.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-clay to-clay/80 text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-clay/50 transition-all duration-300 group overflow-hidden relative hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-ivory/0 to-ivory/30 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative flex items-center gap-2 justify-center">
                  See Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-white/30 text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:border-clay hover:text-clay hover:bg-white/5 transition-all duration-300 group hover:scale-105"
              >
                Get in Touch
              </button>
            </div>

            {/* Quick Facts */}
            <div className="pt-8 border-t border-white/10 space-y-3 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3 text-gray-300 animate-float-up transition-all duration-300 hover:translate-x-2" style={{ animationDelay: '0.6s' }}>
                <span className="text-clay">☕</span>
                <span>Coffee intake: <strong>5+ cups/day</strong> (please send help)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 animate-float-up transition-all duration-300 hover:translate-x-2" style={{ animationDelay: '0.7s' }}>
                <span className="text-clay">💻</span>
                <span>Current focus: <strong>Next.js, React, PostgreSQL</strong></span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 animate-float-up transition-all duration-300 hover:translate-x-2" style={{ animationDelay: '0.8s' }}>
                <span className="text-clay">🔧</span>
                <span>Favourite hack: <strong>Fixing bugs at 3 AM</strong></span>
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Glow effect - appears on hover */}
              <div className="absolute -inset-6 bg-gradient-to-r from-clay/30 via-ivory/10 to-clay/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden border border-white/20 group-hover:border-clay/50 transition-all duration-300">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/256x320?text=Profile';
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/20 to-transparent group-hover:from-clay/40 transition-all duration-500"></div>
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(232, 220, 194, 0.1) 50%, transparent 70%)',
                  animation: 'slideShine 0.6s ease-out'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
