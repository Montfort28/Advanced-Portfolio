import React, { useState, useEffect } from 'react';

type ScrollDirection = 'down' | 'up' | 'both';

const ScrollIndicator: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('down');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Check if at top
      const atTop = scrollTop < 100;

      // Check if at bottom (within 100px of bottom)
      const atBottom = scrollTop >= docHeight - 100;

      // Determine scroll direction
      if (atTop) {
        setScrollDirection('down');
      } else if (atBottom) {
        setScrollDirection('up');
      } else {
        setScrollDirection('both');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 transform -translate-y-1/2 z-30 flex-col items-center gap-8">
      {/* Scroll Up Indicator */}
      {(scrollDirection === 'up' || scrollDirection === 'both') && (
        <div className="flex flex-col items-center gap-2 animate-pulse">
          <div className="text-clay font-bold uppercase text-xs tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '2px' }}>
            ↑ Scroll Up
          </div>
          <svg className="w-5 h-5 text-clay animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16V4m0 0l3.5 3.5M7 4L3.5 7.5" />
          </svg>
        </div>
      )}

      {/* Vertical Line */}
      <div className="w-px h-20 bg-gradient-to-b from-clay/30 via-clay/50 to-clay/30"></div>

      {/* Scroll Down Indicator */}
      {(scrollDirection === 'down' || scrollDirection === 'both') && (
        <div className="flex flex-col items-center gap-2 animate-pulse">
          <svg className="w-5 h-5 text-clay animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.3s' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H7" />
          </svg>
          <div className="text-clay font-bold uppercase text-xs tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '2px' }}>
            ↓ Scroll Down
          </div>
        </div>
      )}

      {/* Vertical Line */}
      <div className="w-px h-20 bg-gradient-to-b from-clay/30 via-clay/50 to-clay/30"></div>
    </div>
  );
};

export default ScrollIndicator;
