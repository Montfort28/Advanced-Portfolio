import React from 'react';

interface Tech {
  name: string;
  icon: string;
}

const Technologies: React.FC = () => {
  const technologies: Tech[] = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vue.js', icon: '✓' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'Node.js', icon: '⬢' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Prisma', icon: '◈' },
    { name: 'Figma', icon: '◉' },
    { name: 'GitHub', icon: '◆' }
  ];

  return (
    <section id="technologies" className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center animate-fadeInUp">
          <p className="text-sm uppercase tracking-widest text-clay font-bold mb-4">My Arsenal</p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Technologies & Tools
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Cutting-edge technologies that power modern web experiences
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-clay/50 transition-all duration-300 group-hover:bg-white/10 h-full">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-clay/0 via-clay/20 to-clay/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                
                {/* Icon */}
                <div className="relative z-10 text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>

                {/* Name */}
                <p className="relative z-10 text-sm md:text-base font-bold text-white text-center group-hover:text-clay transition-colors duration-300">
                  {tech.name}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-clay via-ivory to-clay scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
