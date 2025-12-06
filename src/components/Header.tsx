import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'ABOUT', id: 'about' },
    { title: 'PROJECTS', id: 'projects' },
    { title: 'CONTACT', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navigation Bar - No borders, logo on left, nav on right */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div className={`flex items-center justify-between px-12 py-6 backdrop-blur-sm transition-all duration-500 ${scrolled
          ? 'bg-[#1a1a1a]/90'
          : 'bg-transparent'
          }`}>
          {/* Logo on Left */}
          <button
            className="flex items-center group relative flex-shrink-0 bg-transparent border-none cursor-pointer p-0 mb-4"
            onClick={() => {
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Go to home"
          >
            <img
              src="/M logo.png"
              alt="Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = '/favicon.svg';
              }}
            />
          </button>

          {/* Navigation Items on Right */}
          <div className="flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-xs font-bold tracking-[0.15em] transition-all duration-300 group overflow-hidden text-gray-300 hover:text-clay rounded-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-clay/0 via-clay/20 to-clay/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 rounded-lg"></span>
                <span className="relative">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Header - Logo and Hamburger */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] border-b border-white/10 z-50 flex items-center justify-between px-4 backdrop-blur-md">
        {/* Logo */}
        <button
          className="flex items-center group relative flex-shrink-0 bg-transparent border-none cursor-pointer p-0"
          onClick={() => {
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Go to home"
        >
          <img
            src="/M logo.png"
            alt="Logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = '/favicon.svg';
            }}
          />
        </button>

        {/* Hamburger Menu Button */}
        <button
          className="relative w-10 h-10 flex items-center justify-center focus:outline-none group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute h-0.5 w-6 bg-gradient-to-r from-clay to-clay/50 transition-all duration-500 transform origin-center ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'
              }`}></span>
            <span className={`absolute h-0.5 w-6 bg-gradient-to-r from-clay to-clay/50 top-2.5 transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
            <span className={`absolute h-0.5 w-6 bg-gradient-to-r from-clay to-clay/50 transition-all duration-500 transform origin-center ${isMenuOpen ? '-rotate-45 top-2' : 'bottom-0'
              }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="fixed md:hidden top-16 left-0 right-0 z-40 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a] to-[#0f0f0f] border-b border-white/10 shadow-2xl animate-slideInDown">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left py-3 px-4 text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 rounded-lg group relative overflow-hidden text-gray-300 hover:text-clay hover:bg-clay/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-clay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;