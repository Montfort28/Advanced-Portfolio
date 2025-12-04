import React from "react";

const AnimatedArrow: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:bottom-auto lg:top-1/2 lg:left-auto lg:right-[-120px] lg:translate-x-0 lg:-translate-y-1/2 flex flex-col items-center gap-0 z-20">
      {/* Container for arrow and label side by side */}
      <div className="flex items-center gap-3 lg:gap-4">
        {/* Arrow SVG - using external file with animation */}
        <div
          className="w-32 h-auto lg:rotate-0 rotate-90"
          style={{
            animation: 'glowPulse 3s ease-in-out infinite',
            pointerEvents: "none"
          }}
        >
          <img
            src="/swirl-arrow-right-icon.svg"
            alt="Fullstack Engineer Arrow"
            className="w-full h-auto"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(217, 164, 108, 0.7))',
              animation: 'arrowFlow 5s linear infinite'
            }}
          />
        </div>

        {/* Label Section - right beside the arrow */}
        <div
          className="flex flex-col items-start gap-0 whitespace-nowrap"
          style={{
            animation: 'glowPulse 3s ease-in-out infinite',
            animationDelay: '0.2s'
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#d9a46c]">Fullstack</p>
          <p className="text-sm font-bold text-[#e8d4c0]">Engineer</p>
        </div>
      </div>

      <style>{`
        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 6px rgba(217, 164, 108, 0.7));
          }
          50% {
            filter: drop-shadow(0 0 14px rgba(217, 164, 108, 1));
          }
        }

        @keyframes arrowFlow {
          0% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedArrow;