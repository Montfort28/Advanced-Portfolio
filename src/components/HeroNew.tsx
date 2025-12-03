import React from 'react';
import { personalInfo } from '../utils/data';
import AnimatedArrow from './AnimatedArrow';
import ContourLines from './ContourLines';

const HeroNew = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] overflow-hidden pt-32 md:pt-20 lg:pt-0">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span className="block text-white animate-slideInLeft" style={{ animationDelay: '0.1s' }}>I'm Montfort.</span>
                <span className="block bg-gradient-to-r from-clay via-ivory to-clay bg-clip-text text-transparent animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                  I build things that
                </span>
                <span className="block bg-gradient-to-r from-clay via-ivory to-clay bg-clip-text text-transparent animate-slideInLeft" style={{ animationDelay: '0.25s' }}>
                  don't break.
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
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


          </div>

          {/* Right Image */}
          <div className="flex flex-col items-center animate-slideInRight opacity-0" style={{ animationDelay: '0.4s', animation: 'slideInRight 0.8s ease-out 0.4s forwards' }}>
            <div className="relative group">
              {/* Animated gradient orbs background */}
              <div className="absolute -inset-8 bg-gradient-to-r from-clay/20 via-transparent to-ivory/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-clay/30 to-ivory/10 blur-2xl opacity-40"></div>

              {/* Contour Lines - Animated SVG */}
              <div className="absolute inset-0 w-full h-full">
                <ContourLines />
              </div>

              {/* Premium profile image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-2 border-clay/50 backdrop-blur-sm group-hover:border-clay transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-clay/50">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-clay/50 to-ivory/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/320?text=Profile';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-clay/0 via-clay/10 to-ivory/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Animated floating arrow with label */}
              <AnimatedArrow />

              {/* Decorative floating elements */}
              <div className="absolute top-0 right-0 w-20 h-20 border border-clay/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
              <div className="absolute bottom-0 right-10 w-16 h-16 border border-ivory/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
