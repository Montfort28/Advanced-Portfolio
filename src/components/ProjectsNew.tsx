import React from 'react';
import { projects } from '../utils/data';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  githubLink: string;
}

const ProjectsNew: React.FC = () => {
  return (
    <section id="projects" className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] overflow-hidden py-20 md:py-32 section-morph">

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center animate-fadeInUp">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Selected Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects I've worked on. Each one represents clean code, thoughtful design, and attention to detail.
          </p>
        </div>

        {/* Projects Grid - One per row */}
        <div className="space-y-24">
          {projects.map((project: Project, index: number) => (
            <div
              key={project.id}
              data-project-id={project.title}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image - Alternates side */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-clay/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-clay/20">
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-clay/0 via-clay/10 to-ivory/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/600x400?text=' + encodeURIComponent(project.title);
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-clay font-bold mb-2">Project {index + 1}</p>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">Built with</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 group-hover:border-clay/50 group-hover:text-clay group-hover:bg-white/10 transition-all duration-300 animate-float-up"
                          style={{ animationDelay: `${i * 0.05}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-clay hover:text-clay hover:bg-white/5 transition-all duration-300 font-bold text-sm uppercase tracking-wider group/btn hover:scale-105 hover:shadow-lg hover:shadow-clay/20"
                    >
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23-.01-.97-.01-1.89-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.82c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                        </svg>
                        Code
                      </span>
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-clay to-clay/80 text-white rounded-lg hover:shadow-lg hover:shadow-clay/50 transition-all duration-300 font-bold text-sm uppercase tracking-wider hover:scale-105"
                      >
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < projects.length - 1 && (
                <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsNew;
