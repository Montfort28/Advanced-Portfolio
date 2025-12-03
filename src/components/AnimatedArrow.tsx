import React from "react";

const AnimatedArrow: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:bottom-auto lg:top-1/2 lg:left-auto lg:right-[-100px] lg:translate-x-0 lg:-translate-y-1/2 flex flex-col items-center gap-0 z-20">
      {/* Label Section - at the bottom */}
      <div
        className="flex flex-col items-center gap-0.5 order-2"
        style={{
          animation: 'glowPulse 3s ease-in-out infinite',
          animationDelay: '0.2s'
        }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-[#d9a46c]">Fullstack</p>
        <p className="text-sm font-bold text-[#e8d4c0]">Engineer</p>
      </div>

      {/* Arrow SVG - single elegant swirl starting from label pointing UP to image */}
      <svg
        width="120"
        height="220"
        viewBox="0 0 120 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:rotate-0 rotate-90 order-1"
        style={{ pointerEvents: "none", marginTop: "-8px" }}
      >
        <defs>
          <style>{`
            @keyframes flowPath {
              0% {
                stroke-dashoffset: 0;
              }
              100% {
                stroke-dashoffset: -380;
              }
            }

            @keyframes glowPulse {
              0%, 100% {
                filter: drop-shadow(0 0 6px rgba(217, 164, 108, 0.7));
              }
              50% {
                filter: drop-shadow(0 0 14px rgba(217, 164, 108, 1));
              }
            }

            .main-swirl {
              stroke: #d9a46c;
              stroke-width: 3.5;
              stroke-linecap: round;
              stroke-linejoin: round;
              fill: none;
              stroke-dasharray: 380;
              animation: flowPath 5s linear infinite, glowPulse 3s ease-in-out infinite;
            }

            .arrow-head {
              fill: #d9a46c;
              animation: glowPulse 3s ease-in-out infinite;
              filter: drop-shadow(0 0 8px rgba(217, 164, 108, 0.8));
            }
          `}</style>
        </defs>

        {/* Single elegant swirl starting from bottom (label) pointing UP to image */}
        <path
          className="main-swirl"
          d="M 60 200
             C 50 175, 45 150, 42 125
             C 40 100, 42 75, 50 55
             C 58 35, 70 20, 85 10"
          strokeDasharray="380"
        />

        {/* Small decorative loop accent in the middle - subtle */}
        <path
          className="main-swirl"
          d="M 48 95 Q 40 90, 38 100 Q 40 110, 48 108"
          opacity="0.5"
          strokeWidth="2"
          strokeDasharray="200"
          style={{ animationDelay: '0.3s' }}
        />

        {/* Arrow pointer tip at top - pointing toward image */}
        <g className="arrow-head">
          <polygon points="85,10 78,20 83,25" />
          <line x1="85" y1="10" x2="78" y2="20" strokeWidth="2.5" stroke="#d9a46c" strokeLinecap="round" />
          <line x1="85" y1="10" x2="83" y2="25" strokeWidth="2.5" stroke="#d9a46c" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedArrow;