import React, { useState } from 'react';
import { technologies } from '../utils/data';

const Technologies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="technologies"
      className="relative py-20 md:py-32 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] overflow-hidden section-radial"
    >
      {/* Subtle background grid/gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-clay/5 via-transparent to-transparent"></div>
      </div>

      {/* Decorative top transition line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-clay to-transparent"></div>

      {/* Section Header */}
      <div className="container mx-auto px-4 text-center mb-20 relative z-10 animate-fadeInUp">
        <p className="text-clay font-bold text-sm uppercase tracking-widest mb-4">
          My Arsenal
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-6 animate-slideInLeft">
          <span className="block text-white">Technologies &</span>
          <span className="block bg-gradient-to-r from-clay via-ivory to-clay bg-clip-text text-transparent">
            Tools
          </span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Cutting-edge technologies that power modern web experiences
        </p>
      </div>

      {/* Technologies Grid */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>

          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center animate-slideInLeft"
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >

              {/* Pure Circle Card */}
              <div
                className="relative w-24 h-24 rounded-full flex items-center justify-center
                transition-all duration-300 cursor-pointer overflow-hidden group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: hoveredIndex === index
                    ? `linear-gradient(135deg, ${tech.color}33, ${tech.color}77)`
                    : 'rgba(255,255,255,0.05)',
                  boxShadow: hoveredIndex === index
                    ? `0 0 22px ${tech.color}60, 0 0 40px ${tech.color}30`
                    : '0 0 10px rgba(0,0,0,0.4)',
                  border: hoveredIndex === index
                    ? `2px solid ${tech.color}`
                    : '2px solid transparent',
                  transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                }}
              >
                <img
                  src={tech.imagePath}
                  alt={tech.name}
                  className="w-12 h-12 object-contain transition-all duration-300"
                  style={{
                    filter: hoveredIndex === index
                      ? 'brightness(1.4) drop-shadow(0 0 6px rgba(255,255,255,0.4))'
                      : 'brightness(0.9) grayscale(40%)'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div style="
                          width: 32px;
                          height: 32px;
                          border-radius: 50%;
                          background: ${tech.color}44;
                          color: ${tech.color};
                          font-weight: bold;
                          font-size: 14px;
                          display: flex;
                          align-items: center;
                          justify-content: center;">
                          ${tech.name.charAt(0)}
                        </div>`;
                    }
                  }}
                />
              </div>

              {/* Tech Name */}
              <p
                className={`text-xs font-bold mt-2 transition-all duration-300 ${
                  hoveredIndex === index ? 'text-clay' : 'text-gray-400'
                }`}
              >
                {tech.name}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Subtext */}
        <div className="text-center mt-20 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-400 text-lg">
            Continuously learning new technologies to stay ahead in the industry
          </p>
        </div>
      </div>

      {/* Decorative bottom transition line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-clay to-transparent"></div>
    </section>
  );
};

export default Technologies;
