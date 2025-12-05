import React, { useState, useEffect } from 'react';

const PageIndicator: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // Hero, About, Projects, Contact
  const sectionIds = ['hero', 'about', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', page: 1 },
        { id: 'about', page: 2 },
        { id: 'projects', page: 3 },
        { id: 'contact', page: 4 },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentPage(sections[i].page);
          break;
        }
      }
    };

    // Small delay to ensure DOM is fully loaded before checking scroll position
    setTimeout(() => {
      handleScroll();
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageClick = (page: number) => {
    const sectionId = sectionIds[page - 1];
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Update page immediately for better UX
      setCurrentPage(page);
    }
  };

  return (
    <div className="hidden lg:flex fixed right-12 top-1/2 transform -translate-y-1/2 z-30 flex-col items-center gap-6">
      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <div
          key={page}
          className={`flex flex-col items-center transition-all duration-500 cursor-pointer group`}
          onClick={() => handlePageClick(page)}
        >
          {/* Page Number */}
          <span
            className={`text-sm font-bold tracking-widest transition-all duration-500 ${
              currentPage === page
                ? 'text-clay text-lg'
                : 'text-gray-500 group-hover:text-gray-300'
            }`}
          >
            {String(page).padStart(2, '0')}
          </span>

          {/* Vertical Line Connector */}
          {page < totalPages && (
            <div
              className={`w-px h-12 transition-all duration-500 ${
                currentPage === page ? 'bg-clay' : 'bg-gray-700'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PageIndicator;
