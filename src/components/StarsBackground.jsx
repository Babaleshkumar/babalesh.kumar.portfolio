import React, { useEffect, useState } from 'react';

const Star = ({ id }) => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const size = Math.random() * 0.5 + 0.3;
  const duration = Math.random() * 8 + 4; // Movement duration - faster
  const delay = Math.random() * 3;
  const vx = (Math.random() - 0.5) * 80; // Velocity in x direction - increased
  const vy = (Math.random() - 0.5) * 80; // Velocity in y direction - increased

  return (
    <circle
      key={id}
      cx={`${x}%`}
      cy={`${y}%`}
      r={size}
      fill="#a0aec0"
      style={{
        animation: `moveAndFade ${duration}s linear ${delay}s infinite`,
        '--vx': `${vx}px`,
        '--vy': `${vy}px`,
        '--duration': `${duration}s`,
      }}
    />
  );
};

export default function StarsBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate initial stars
    setStars([...Array(40)].map((_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Animated stars background */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <style>{`
            @keyframes moveAndFade {
              0% {
                opacity: 0;
                transform: translate(0, 0);
              }
              10% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                opacity: 0;
                transform: translate(var(--vx), var(--vy));
              }
            }
          `}</style>
        </defs>

        {/* Star field with movement and fading */}
        {stars.map((id) => (
          <Star key={id} id={id} />
        ))}
      </svg>
    </div>
  );
}
