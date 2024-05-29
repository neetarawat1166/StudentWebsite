import React from 'react';

const CircleProgress = ({ percentage }) => {
  const radius = 40; // Adjust this value for your desired circle size
  const circumference = 2 * Math.PI * radius;
  const padding = 4; // Adjust this value to control the space around the circle

  const strokeDasharray = circumference + ' ' + circumference;
  const strokeDashoffset = circumference * (100 - percentage) / 100;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${radius * 2 + padding} ${radius * 2 + padding}`}>
        <circle
          className="stroke-gray-300 fill-transparent"
          cx={radius + padding / 2}
          cy={radius + padding / 2}
          r={radius}
          strokeWidth="4"
        />
        <circle
          className="stroke-[#003366] fill-transparent"
          cx={radius + padding / 2}
          cy={radius + padding / 2}
          r={radius}
          strokeWidth="4"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute inset-0 flex justify-center items-center">
        <span className="text-xl font-bold">{percentage}%</span>
      </div>
    </div>
  );
};

export default CircleProgress;
