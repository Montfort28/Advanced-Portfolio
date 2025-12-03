import React from 'react';

const ContourLines: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: 'none' }}
    >
      <defs>
        <style>{`
          @keyframes dashFlow {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: -20;
            }
          }

          .contour-line {
            stroke: #d9a46c;
            stroke-width: 1.5;
            fill: none;
            opacity: 0.4;
            animation: dashFlow 3s linear infinite;
          }

          .contour-line-slow {
            stroke: #d9a46c;
            stroke-width: 1.2;
            fill: none;
            opacity: 0.3;
            animation: dashFlow 4s linear infinite;
          }

          .contour-line-slower {
            stroke: #d9a46c;
            stroke-width: 1;
            fill: none;
            opacity: 0.25;
            animation: dashFlow 5s linear infinite;
          }
        `}</style>
      </defs>

      {/* Left side contour lines */}
      <path
        className="contour-line"
        d="M 80 100 Q 75 150 80 200 Q 85 250 90 300"
        strokeDasharray="20 10"
      />
      <path
        className="contour-line-slow"
        d="M 60 120 Q 50 170 60 220 Q 70 270 80 320"
        strokeDasharray="20 10"
      />
      <path
        className="contour-line-slower"
        d="M 40 140 Q 25 190 40 240 Q 55 290 70 340"
        strokeDasharray="20 10"
      />

      {/* Right side contour lines */}
      <path
        className="contour-line"
        d="M 320 100 Q 325 150 320 200 Q 315 250 310 300"
        strokeDasharray="20 10"
      />
      <path
        className="contour-line-slow"
        d="M 340 120 Q 350 170 340 220 Q 330 270 320 320"
        strokeDasharray="20 10"
      />
      <path
        className="contour-line-slower"
        d="M 360 140 Q 375 190 360 240 Q 345 290 330 340"
        strokeDasharray="20 10"
      />

      {/* Top contour lines */}
      <path
        className="contour-line"
        d="M 150 80 Q 200 75 250 80"
        strokeDasharray="20 10"
      />
      <path
        className="contour-line-slow"
        d="M 140 60 Q 200 50 260 60"
        strokeDasharray="20 10"
      />

      {/* Bottom contour lines */}
      <path
        className="contour-line"
        d="M 150 420 Q 200 430 250 420"
        strokeDasharray="20 10"
      />
      <path
        className="contour-line-slow"
        d="M 140 440 Q 200 450 260 440"
        strokeDasharray="20 10"
      />

      {/* Curved geometric frames */}
      <path
        className="contour-line-slower"
        d="M 100 120 Q 150 100 200 110 Q 250 115 300 120"
        strokeDasharray="20 10"
      />
      <path
        className="contour-line-slower"
        d="M 100 380 Q 150 400 200 390 Q 250 385 300 380"
        strokeDasharray="20 10"
      />

      {/* Decorative circles */}
      <circle
        className="contour-line"
        cx="200"
        cy="250"
        r="150"
        strokeDasharray="20 10"
      />
      <circle
        className="contour-line-slow"
        cx="200"
        cy="250"
        r="130"
        strokeDasharray="20 10"
      />
    </svg>
  );
};

export default ContourLines;
