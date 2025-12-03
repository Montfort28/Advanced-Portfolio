import React from 'react';
import { technologies } from '../utils/data';

const Technologies = () => {
  return (
    <section id="technologies" className="relative py-20 md:py-32 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-clay/5 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-clay font-bold text-sm uppercase tracking-widest mb-4 animate-fadeIn">MY ARSENAL</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 animate-slideInLeft">
            <span className="block text-white">Technologies &</span>
            <span className="block bg-gradient-to-r from-clay via-ivory to-clay bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Cutting-edge technologies that power modern web experiences
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group animate-scaleIn opacity-0"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#1e1e1e] to-[#0a0a0a] rounded-2xl border border-white/10 transition-all duration-300 hover:border-clay/50 h-full">
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-clay/0 via-clay/5 to-ivory/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-clay/20 via-transparent to-ivory/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  {/* Icon Container */}
                  <div className="relative w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    {/* Floating border circle */}
                    <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-clay/50 transition-all duration-300"></div>
                    
                    {/* Icon */}
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <img
                        src={tech.imagePath}
                        alt={tech.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 filter brightness-100 group-hover:brightness-125"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style="background-color: ${tech.color}50; color: ${tech.color};">${tech.name.charAt(0)}</div>`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-sm font-semibold text-white text-center transition-all duration-300 group-hover:text-clay">
                    {tech.name}
                  </p>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(197, 123, 87, 0.1) 50%, transparent 70%)',
                  animation: 'slideShine 0.8s ease-out infinite'
                }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-400 mb-4">
            Continuously learning new technologies to stay ahead in the industry
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
