import React, { useState, useRef } from 'react';
import { personalInfo } from '../utils/data';
import ContourLines from './ContourLines';

type TimelineTab = 'experience' | 'education' | 'certifications';

const AboutNew: React.FC = () => {
  const [blobStyle, setBlobStyle] = useState({
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
  });
  const [isHovering, setIsHovering] = useState(false);
  const [activeTab, setActiveTab] = useState<TimelineTab>('experience');
  const containerRef = useRef<HTMLDivElement>(null);

  const specialtyCards = [
    { 
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Lightning Fast', 
      desc: 'Performance-optimized code that loads in milliseconds' 
    },
    { 
      icon: 'M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-4h2v22h-2zm4 6h2v16h-2z',
      title: 'Pixel Perfect', 
      desc: 'Meticulous attention to design details and UX flow' 
    },
    { 
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z',
      title: 'API Ninja', 
      desc: 'Expert in Slack, ClickUp, OAuth & custom integrations' 
    },
    { 
      icon: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
      title: 'Full Stack',
      desc: 'From database design to responsive frontend interfaces'
    },
    {
      icon: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
      title: 'Clean Code',
      desc: 'Writing maintainable, scalable code with best practices'
    },
    {
      icon: 'M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14 4.14 5.57 2.71 7 4.14 8.43 2 10.57l1.43 1.43L2 17v3h3l11.86-11.86 1.43 1.43L7 20.57V23h3l12.86-12.86 1.43 1.43L23 21.57V24h-3l-2.57-2.57z',
      title: 'Problem Solver',
      desc: 'Debugging complex issues and finding elegant solutions'
    },
    {
      icon: 'M12 17.5c1.93 0 3.5-1.57 3.5-3.5S13.93 10.5 12 10.5 8.5 12.07 8.5 14s1.57 3.5 3.5 3.5zm6-9H17V4.5h-2v4H6.5V4.5h-2V8.5H4v2h2V17c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-6.5h2v-2z',
      title: 'Design Minded',
      desc: 'Bridging the gap between design and development seamlessly'
    }
  ];

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
    }
  ];

  const education = [
    {
      title: 'Bachelor of Software Engineering',
      company: 'INES Ruhengeri',
      period: 'Graduated October 2025',
      description: 'Strong foundation in fullstack development, cloud technologies, and modern software architecture.',
      highlights: ['Software Engineering', 'Fullstack', 'Architecture']
    }
  ];

  const certifications = [
    {
      title: 'Data Analysis Bootcamp',
      company: 'Udemy',
      period: 'September 2025',
      description: 'Completed a practical bootcamp where I used Python along with libraries like Pandas and NumPy to clean, analyze, and visualize datasets, gaining hands-on experience with basic data analysis workflows.',
      highlights: ['Python', 'Pandas', 'NumPy', 'Data Analysis']
    },
    {
      title: 'Beyond Success Leadership Program',
      company: 'Dr. John C. Maxwell',
      period: '2024',
      description: 'Completed a leadership and personal growth program focused on developing mindset, communication, and practical leadership habits.',
      highlights: ['Leadership', 'Growth', 'Communication']
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Create a dynamic blob shape based on mouse position
    const randomRadius1 = 20 + x * 40;
    const randomRadius2 = 20 + y * 40;
    const randomRadius3 = 20 + (1 - x) * 40;
    const randomRadius4 = 20 + (1 - y) * 40;

    setBlobStyle({
      borderRadius: `${randomRadius1}% ${randomRadius2}% ${randomRadius3}% ${randomRadius4}% / ${randomRadius4}% ${randomRadius3}% ${randomRadius2}% ${randomRadius1}%`
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Smoothly return to original shape
    setBlobStyle({
      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
    });
  };

  return (
    <section id="about" className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] py-16 md:py-28 scroll-smooth transition-all duration-1000 section-wave">
      <style>{`
        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes cardGlow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(201, 123, 86, 0.2), inset 0 0 15px rgba(201, 123, 86, 0.05);
          }
          50% {
            box-shadow: 0 0 30px rgba(201, 123, 86, 0.5), inset 0 0 30px rgba(201, 123, 86, 0.15);
          }
        }

        @keyframes blobShift {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 70% 30% 40% 60% / 30% 60% 60% 40%;
          }
          75% {
            border-radius: 40% 70% 60% 30% / 70% 40% 30% 60%;
          }
        }

        .specialty-card {
          animation: cardFloat 3s ease-in-out infinite, cardGlow 3s ease-in-out infinite;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(201, 123, 86, 0.3);
          background: rgba(201, 123, 86, 0.05);
        }

        .specialty-card:hover {
          background: rgba(201, 123, 86, 0.15) !important;
          border-color: rgba(201, 123, 86, 0.8) !important;
          transform: scale(1.05);
        }

        .icon-blob {
          animation: blobShift 6s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Centered About Heading */}
        <div className="text-center mb-6 md:mb-8 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6">
            Who I Am
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed px-2">
            Fullstack developer with strong frontend experience in <strong className="text-ivory">Next.js & Tailwind CSS</strong>. Passionate about creating beautiful, intuitive user experiences while building scalable backend systems. I specialize in API integrations including Slack notifications, ClickUp automation, and OAuth implementations. With hands-on experience in Agile environments, I excel at code reviews, collaborative development, and maintaining clean code architecture. My approach combines modern technologies with attention to detail, ensuring every project is both performant and visually stunning. ( I Promise I’m More Interesting Than This Section.)
          </p>
        </div>

        {/* Specialty Cards Surrounding Image */}
        <div className="mb-12 md:mb-16">
          <div className="relative max-w-5xl mx-auto flex justify-center items-center" style={{ minHeight: '500px' }}>
            {/* Top Card */}
            <div className="absolute -top-10 md:-top-12 left-1/2 transform -translate-x-1/2 w-32 md:w-40 animate-slideInUp opacity-0" style={{ animationDelay: '0.1s', animation: 'slideInUp 0.8s ease-out 0.1s forwards' }}>
              <div className="specialty-card p-4 md:p-6 rounded-2xl md:rounded-3xl text-center h-32 md:h-40 flex flex-col items-center justify-center">
                <svg className="w-6 md:w-8 h-6 md:h-8 mb-2 text-clay" fill="currentColor" viewBox="0 0 24 24">
                  <path d={specialtyCards[0].icon} />
                </svg>
                <h4 className="text-xs md:text-sm font-bold text-white mb-1">{specialtyCards[0].title}</h4>
                <p className="text-xs text-gray-300 text-center leading-tight line-clamp-3">{specialtyCards[0].desc}</p>
              </div>
            </div>

            {/* Profile Image - Center */}
            <div className="flex justify-center items-center animate-slideInRight opacity-0" style={{ animationDelay: '0.2s', animation: 'slideInRight 0.8s ease-out 0.2s forwards' }}>
              <div 
                ref={containerRef}
                className="relative group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Animated gradient orbs background */}
                <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-r from-clay/20 via-transparent to-ivory/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse hidden md:block"></div>
                <div className="absolute inset-0 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-clay/30 to-ivory/10 blur-2xl opacity-40 hidden md:block"></div>

                {/* Contour Lines - Animated SVG */}
                <div className="absolute inset-0 w-full h-full hidden md:block">
                  <ContourLines />
                </div>

                {/* Premium profile image container with dynamic blob border */}
                <div 
                  className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden shadow-2xl backdrop-blur-sm transition-all duration-200 group-hover:shadow-2xl group-hover:shadow-clay/50"
                  style={{
                    ...blobStyle,
                    border: '2px solid rgba(201, 123, 86, 0.5)',
                    transitionProperty: 'border-radius, border-color, box-shadow'
                  }}
                >
                  <img
                    src="/Mugisha_Montfort_Profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/320?text=Profile';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-clay/0 via-clay/10 to-ivory/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Left Card - Hidden on mobile */}
            <div className="absolute top-1/3 -left-1 md:-left-2 transform -translate-y-1/2 w-32 md:w-40 animate-slideInLeft opacity-0 hidden sm:block" style={{ animationDelay: '0.15s', animation: 'slideInLeft 0.8s ease-out 0.15s forwards' }}>
              <div className="specialty-card p-3 md:p-5 rounded-2xl md:rounded-3xl text-center h-32 md:h-40 flex flex-col items-center justify-center">
                <svg className="w-5 md:w-7 h-5 md:h-7 mb-1 md:mb-2 text-clay" fill="currentColor" viewBox="0 0 24 24">
                  <path d={specialtyCards[1].icon} />
                </svg>
                <h4 className="text-xs font-bold text-white mb-1">{specialtyCards[1].title}</h4>
                <p className="text-xs text-gray-300 line-clamp-2 leading-tight">{specialtyCards[1].desc}</p>
              </div>
            </div>

            {/* Right Card - Hidden on mobile */}
            <div className="absolute top-1/3 -right-1 md:-right-2 transform -translate-y-1/2 w-32 md:w-40 animate-slideInRight opacity-0 hidden sm:block" style={{ animationDelay: '0.25s', animation: 'slideInRight 0.8s ease-out 0.25s forwards' }}>
              <div className="specialty-card p-3 md:p-5 rounded-2xl md:rounded-3xl text-center h-32 md:h-40 flex flex-col items-center justify-center">
                <svg className="w-5 md:w-7 h-5 md:h-7 mb-1 md:mb-2 text-clay" fill="currentColor" viewBox="0 0 24 24">
                  <path d={specialtyCards[2].icon} />
                </svg>
                <h4 className="text-xs font-bold text-white mb-1">{specialtyCards[2].title}</h4>
                <p className="text-xs text-gray-300 line-clamp-2 leading-tight">{specialtyCards[2].desc}</p>
              </div>
            </div>

            {/* Bottom-Left Card - Hidden on mobile */}
            <div className="absolute -bottom-6 md:-bottom-8 left-1/4 transform -translate-x-1/2 w-32 md:w-40 animate-slideInDown opacity-0 hidden sm:block" style={{ animationDelay: '0.3s', animation: 'slideInDown 0.8s ease-out 0.3s forwards' }}>
              <div className="specialty-card p-3 md:p-5 rounded-2xl md:rounded-3xl text-center h-32 md:h-40 flex flex-col items-center justify-center">
                <svg className="w-5 md:w-7 h-5 md:h-7 mb-1 md:mb-2 text-clay" fill="currentColor" viewBox="0 0 24 24">
                  <path d={specialtyCards[3].icon} />
                </svg>
                <h4 className="text-xs font-bold text-white mb-1">{specialtyCards[3].title}</h4>
                <p className="text-xs text-gray-300 line-clamp-2 leading-tight">{specialtyCards[3].desc}</p>
              </div>
            </div>

            {/* Bottom-Right Card - Hidden on mobile */}
            <div className="absolute -bottom-6 md:-bottom-8 right-1/4 transform translate-x-1/2 w-32 md:w-40 animate-slideInDown opacity-0 hidden sm:block" style={{ animationDelay: '0.35s', animation: 'slideInDown 0.8s ease-out 0.35s forwards' }}>
              <div className="specialty-card p-3 md:p-5 rounded-2xl md:rounded-3xl text-center h-32 md:h-40 flex flex-col items-center justify-center">
                <svg className="w-5 md:w-7 h-5 md:h-7 mb-1 md:mb-2 text-clay" fill="currentColor" viewBox="0 0 24 24">
                  <path d={specialtyCards[4].icon} />
                </svg>
                <h4 className="text-xs font-bold text-white mb-1">{specialtyCards[4].title}</h4>
                <p className="text-xs text-gray-300 line-clamp-2 leading-tight">{specialtyCards[4].desc}</p>
              </div>
            </div>

            {/* Additional Left Card - Hidden on mobile */}
            <div className="absolute top-3/4 -left-3 md:-left-4 transform -translate-y-1/2 w-32 md:w-40 animate-slideInLeft opacity-0 hidden lg:block" style={{ animationDelay: '0.4s', animation: 'slideInLeft 0.8s ease-out 0.4s forwards' }}>
              <div className="specialty-card p-3 md:p-5 rounded-2xl md:rounded-3xl text-center h-32 md:h-40 flex flex-col items-center justify-center">
                <svg className="w-5 md:w-7 h-5 md:h-7 mb-1 md:mb-2 text-clay" fill="currentColor" viewBox="0 0 24 24">
                  <path d={specialtyCards[5].icon} />
                </svg>
                <h4 className="text-xs font-bold text-white mb-1">{specialtyCards[5].title}</h4>
                <p className="text-xs text-gray-300 line-clamp-2 leading-tight">{specialtyCards[5].desc}</p>
              </div>
            </div>

            {/* Additional Right Card - Hidden on mobile */}
            <div className="absolute top-3/4 -right-3 md:-right-4 transform -translate-y-1/2 w-32 md:w-40 animate-slideInRight opacity-0 hidden lg:block" style={{ animationDelay: '0.45s', animation: 'slideInRight 0.8s ease-out 0.45s forwards' }}>
              <div className="specialty-card p-3 md:p-5 rounded-2xl md:rounded-3xl text-center h-32 md:h-40 flex flex-col items-center justify-center">
                <svg className="w-5 md:w-7 h-5 md:h-7 mb-1 md:mb-2 text-clay" fill="currentColor" viewBox="0 0 24 24">
                  <path d={specialtyCards[6].icon} />
                </svg>
                <h4 className="text-xs font-bold text-white mb-1">{specialtyCards[6].title}</h4>
                <p className="text-xs text-gray-300 line-clamp-2 leading-tight">{specialtyCards[6].desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Tabs with Animations */}
        <div className="max-w-4xl mx-auto mt-16">
          {/* Tab Navigation - Styled Side Tabs */}
          <div className="mb-16 flex justify-center gap-4 flex-wrap animate-fadeInUp">
            {[
              { id: 'experience' as TimelineTab, label: 'Experience', icon: 'M20 6h-2.18c-.4-1.16-1.64-2-3.82-2-2.4 0-2.72 1.64-4 4.86V6h-5v14h5v-8c0-1.25.756-4 2.863-4 1.236 0 2.5.5 2.5 2v8h5V8.5c0-3.064-2.3-2.5-3.363-2.5z' },
              { id: 'education' as TimelineTab, label: 'Education', icon: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82m7-6.36L5 6.56v4.31L12 15l7-4.13V6.56l-7 4.26' },
              { id: 'certifications' as TimelineTab, label: 'Certifications', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.16-2.66c-.44-.53-1.25-.58-1.78-.15-.53.44-.58 1.25-.15 1.78l3 3.71c.75.93 2.25.93 3 0l4-5.07c.44-.53.39-1.34-.15-1.78-.53-.44-1.34-.39-1.78.15l-2.23 2.84z' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-clay text-white shadow-lg shadow-clay/50'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:border-clay hover:text-clay'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={tab.icon} />
                </svg>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area with Animation */}
          <div className="relative">
            {/* Experience Timeline */}
            {activeTab === 'experience' && (
              <div className="space-y-8 animate-fadeInUp">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative group animate-fadeInUp"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-clay/50 via-clay/30 to-transparent"></div>
                    <div className="absolute left-0 top-8 w-3 h-3 -translate-x-1 bg-clay rounded-full transform -translate-y-1/2 group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="pl-8 pb-8 group-hover:pl-10 transition-all duration-300">
                      <div className="space-y-2 mb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h4 className="text-2xl font-bold text-white group-hover:text-clay transition-colors duration-300">{exp.title}</h4>
                          <span className="text-sm text-gray-400 font-mono">{exp.period}</span>
                        </div>
                        <p className="text-clay font-bold">{exp.company}</p>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 group-hover:border-clay group-hover:text-clay group-hover:bg-white/10 transition-all duration-300"
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
            )}

            {/* Education Timeline */}
            {activeTab === 'education' && (
              <div className="space-y-8 animate-fadeInUp">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative group animate-fadeInUp"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-clay/50 via-clay/30 to-transparent"></div>
                    <div className="absolute left-0 top-8 w-3 h-3 -translate-x-1 bg-clay rounded-full transform -translate-y-1/2 group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="pl-8 pb-8 group-hover:pl-10 transition-all duration-300">
                      <div className="space-y-2 mb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h4 className="text-2xl font-bold text-white group-hover:text-clay transition-colors duration-300">{edu.title}</h4>
                          <span className="text-sm text-gray-400 font-mono">{edu.period}</span>
                        </div>
                        <p className="text-clay font-bold">{edu.company}</p>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 group-hover:border-clay group-hover:text-clay group-hover:bg-white/10 transition-all duration-300"
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
            )}

            {/* Certifications Timeline */}
            {activeTab === 'certifications' && (
              <div className="space-y-8 animate-fadeInUp">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="relative group animate-fadeInUp"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-clay/50 via-clay/30 to-transparent"></div>
                    <div className="absolute left-0 top-8 w-3 h-3 -translate-x-1 bg-clay rounded-full transform -translate-y-1/2 group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="pl-8 pb-8 group-hover:pl-10 transition-all duration-300">
                      <div className="space-y-2 mb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h4 className="text-2xl font-bold text-white group-hover:text-clay transition-colors duration-300">{cert.title}</h4>
                          <span className="text-sm text-gray-400 font-mono">{cert.period}</span>
                        </div>
                        <p className="text-clay font-bold">{cert.company}</p>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">{cert.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.highlights.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 group-hover:border-clay group-hover:text-clay group-hover:bg-white/10 transition-all duration-300"
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;
