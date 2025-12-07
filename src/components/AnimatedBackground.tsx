import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes pulse-slow { 0%,100%{transform:scale(1) translateY(0);} 50%{transform:scale(1.12) translateY(-25px);} }
        @keyframes pulse-slower { 0%,100%{transform:scale(1) translateY(0);} 50%{transform:scale(1.18) translateY(35px);} }
        @keyframes pulse-slowest { 0%,100%{transform:scale(1) translateX(0);} 50%{transform:scale(1.22) translateX(-30px);} }
        .animate-pulse-slow { animation: pulse-slow 10s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 15s ease-in-out infinite; }
        .animate-pulse-slowest { animation: pulse-slowest 20s ease-in-out infinite; }
      `}</style>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top left animated circle */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-clay/50 to-ivory/25 rounded-full blur-3xl animate-pulse-slow opacity-50" />
        {/* Bottom right animated circle */}
        <div className="absolute -bottom-20 right-1/3 w-56 h-56 bg-gradient-to-tr from-clay/40 to-ivory/20 rounded-full blur-3xl animate-pulse-slower opacity-45" />
        {/* Top right animated circle */}
        <div className="absolute top-1/3 right-20 w-40 h-40 bg-gradient-to-tl from-clay/35 to-ivory/15 rounded-full blur-2xl animate-pulse-slowest opacity-40" />
        {/* Bottom left animated circle */}
        <div className="absolute -bottom-40 left-1/2 w-72 h-72 bg-gradient-to-br from-ivory/30 to-clay/15 rounded-full blur-3xl animate-pulse-slow opacity-35" />
      </div>
    </>
  );
};

export default AnimatedBackground;
