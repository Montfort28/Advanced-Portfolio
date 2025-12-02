import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-[#000000] border-t border-white/10 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Brand */}
            <div className="animate-fadeInUp">
              <Link to="/" className="flex items-center group mb-4">
                <span className="text-2xl font-bold font-display bg-gradient-to-r from-clay via-ivory to-clay bg-clip-text text-transparent group-hover:from-ivory group-hover:via-clay group-hover:to-ivory transition-all">
                  MM
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building clean code and better interfaces. One project at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Navigation</h4>
              <nav className="space-y-2">
                <button
                  onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-clay transition-colors text-sm"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-clay transition-colors text-sm"
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-clay transition-colors text-sm"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Social Links */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Social</h4>
              <div className="space-y-2">
                <a
                  href="https://github.com/Montfort28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-clay transition-colors text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mugisha-montfort-5b9177346/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-clay transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:mugishamontfort28@gmail.com"
                  className="block text-gray-400 hover:text-clay transition-colors text-sm"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

          {/* Bottom Section */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Built by Montfort. Running on caffeine and clean code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
