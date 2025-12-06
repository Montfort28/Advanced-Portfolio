import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const StickySocialIcons: React.FC = () => {
  return (
    <div className="hidden lg:flex fixed left-8 top-1/2 transform -translate-y-1/2 z-30 flex-col items-center gap-6">
      {/* Top Divider Line */}
      <div className="w-px h-16 bg-gray-700"></div>

      {/* Social Icons Container */}
      <div className="flex flex-col gap-6 py-4">
        {/* GitHub Icon */}
        <a
          href="https://github.com/Montfort28"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300"
          title="GitHub"
        >
          <FaGithub size={24} />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/mugisha-montfort-5b9177346/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-blue-500 hover:scale-125 transition-all duration-300"
          title="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        
        {/* Email Icon */}
        <a
          href="mailto:mugishamontfort28@gmail.com"
          aria-label="Email"
          className="text-gray-400 hover:text-clay hover:scale-125 transition-all duration-300"
          title="Email"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      {/* Bottom Divider Line */}
      <div className="w-px h-16 bg-gray-700"></div>
    </div>
  );
};

export default StickySocialIcons;
