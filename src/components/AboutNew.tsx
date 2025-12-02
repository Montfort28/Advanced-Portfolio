import React from 'react';
import { personalInfo } from '../utils/data';

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
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            About
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            I'm a fullstack engineer focused on clean UI, real performance, and code that actually works. 
            My passion is building things that feel simple but run strong under the hood.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left: Bio */}
          <div className="space-y-6 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-white">Quick Facts</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-clay pl-4 animate-float-up transition-all duration-300 hover:translate-x-2" style={{ animationDelay: '0s' }}>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Based in</p>
                <p className="text-white font-bold text-lg">{personalInfo.location}</p>
              </div>
              <div className="border-l-2 border-clay pl-4 animate-float-up transition-all duration-300 hover:translate-x-2" style={{ animationDelay: '0.1s' }}>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Specialization</p>
                <p className="text-white font-bold text-lg">Fullstack Development</p>
              </div>
              <div className="border-l-2 border-clay pl-4 animate-float-up transition-all duration-300 hover:translate-x-2" style={{ animationDelay: '0.2s' }}>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Current Focus</p>
                <p className="text-white font-bold text-lg">React & Next.js</p>
              </div>
              <div className="border-l-2 border-clay pl-4 animate-float-up transition-all duration-300 hover:translate-x-2" style={{ animationDelay: '0.3s' }}>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Fun Fact</p>
                <p className="text-white font-bold text-lg">Coffee: 5+ cups/day</p>
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center items-center animate-slideInRight" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-clay/30 to-ivory/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              </div>
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
                <div className="absolute left-0 top-8 w-3 h-3 -translate-x-1 bg-clay rounded-full transform -translate-y-1/2"></div>

                {/* Content */}
                <div className="pl-8 pb-8">
                  <div className="space-y-2 mb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h4 className="text-2xl font-bold text-white">{exp.title}</h4>
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
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 group-hover:border-clay group-hover:text-clay group-hover:bg-white/10 transition-all duration-300 animate-scale-in"
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
