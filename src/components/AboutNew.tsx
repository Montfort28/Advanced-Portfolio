import React from 'react';
import { personalInfo } from '../utils/data';
import AnimatedArrow from './AnimatedArrow';
import ContourLines from './ContourLines';

const AboutNew: React.FC = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Bittwok, Kigali',
      period: 'Nov 2025 – Present',
      description: 'Building frontend components for a tourism discovery platform. Working with PHP, React, and Tailwind CSS in a fast-paced startup environment.',
      highlights: ['React', 'PHP', 'Tailwind CSS', 'Startup']
    },
    {
      title: 'Software Engineering Intern',
      company: 'BouletteProof',
      period: 'May – Aug 2025',
      description: 'Implemented OAuth authentication, Slack integrations, and automated task escalation. Worked with production systems and enterprise databases.',
      highlights: ['Next.js', 'PostgreSQL', 'Prisma', 'OAuth']
    },
    {
      title: 'Education',
      company: 'INES Ruhengeri',
      period: 'Graduated October 2025',
      description: 'Bachelor of Software Engineering. Strong foundation in fullstack development, cloud technologies, and modern software architecture.',
      highlights: ['Software Engineering', 'Fullstack', 'Architecture']
    }
  ];

  return (
    <section id="about" className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            About
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            I'm a fullstack engineer focused on clean UI, real performance, and code that actually works. 
            My passion is building things that feel simple but run strong under the hood.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Quick Facts */}
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-clay/50 hover:bg-white/10 transition-all duration-300 group">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-bold text-white mb-1">Based In</h3>
                  <p className="text-gray-400">Kigali, Rwanda</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-clay/50 hover:bg-white/10 transition-all duration-300 group">
                <span className="text-2xl">💼</span>
                <div>
                  <h3 className="font-bold text-white mb-1">Specialization</h3>
                  <p className="text-gray-400">Fullstack Development</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-clay/50 hover:bg-white/10 transition-all duration-300 group">
                <span className="text-2xl">🔥</span>
                <div>
                  <h3 className="font-bold text-white mb-1">Current Focus</h3>
                  <p className="text-gray-400">React & Next.js</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-clay/50 hover:bg-white/10 transition-all duration-300 group">
                <span className="text-2xl">☕</span>
                <div>
                  <h3 className="font-bold text-white mb-1">Fun Fact</h3>
                  <p className="text-gray-400">Coffee: 5+ cups/day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center items-center animate-slideInRight opacity-0" style={{ animationDelay: '0.3s', animation: 'slideInRight 0.8s ease-out 0.3s forwards' }}>
            <div className="relative group">
              {/* Animated gradient orbs background */}
              <div className="absolute -inset-8 bg-gradient-to-r from-clay/20 via-transparent to-ivory/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-clay/30 to-ivory/10 blur-2xl opacity-40"></div>

              {/* Contour Lines - Animated SVG */}
              <div className="absolute inset-0 w-full h-full">
                <ContourLines />
              </div>

              {/* Premium profile image container */}
              <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl border-2 border-clay/50 backdrop-blur-sm group-hover:border-clay transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-clay/50">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-clay/50 to-ivory/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/288?text=Profile';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-clay/0 via-clay/10 to-ivory/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Animated floating arrow with label */}
              <AnimatedArrow />
            </div>
          </div>
        </div>

        {/* Experience & Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-black text-white mb-16">Experience & Tinkering</h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative group animate-fadeInUp"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-clay/50 via-clay/30 to-transparent"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 w-3 h-3 -translate-x-1 bg-clay rounded-full transform -translate-y-1/2 group-hover:scale-150 transition-transform duration-300"></div>

                {/* Content */}
                <div className="pl-8 pb-8 group-hover:pl-10 transition-all duration-300">
                  <div className="space-y-2 mb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h4 className="text-2xl font-bold text-white group-hover:text-clay transition-colors duration-300">{exp.title}</h4>
                      <span className="text-sm text-gray-400 font-mono">{exp.period}</span>
                    </div>
                    <p className="text-clay font-bold">{exp.company}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 group-hover:border-clay group-hover:text-clay group-hover:bg-white/10 transition-all duration-300 animate-scale-in hover:scale-110"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;
