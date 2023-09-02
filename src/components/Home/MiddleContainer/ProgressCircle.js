import React, { useState } from "react";

const ProgressCircle = () => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const [percent] = useState(80);

  return (
    <>
      <svg className="transform -rotate-90 h-72 absolute translate-x-[-100px] translate-y-[-5px]">
        {/* Background circle */}
        <circle
          cx="145"
          cy="145"
          r={radius}
          stroke="currentColor"
          strokeWidth="15"
          fill="transparent"
          className="text-[#8080802c]"
        />

        {/* Progress circle */}
        <circle
          cx="145"
          cy="145"
          r={radius}
          stroke="currentColor"
          strokeWidth="15"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          className="text-blue-500 transition-all duration-500"
        />
      </svg>
      {/* Percentage Text */}
      <span className="absolute text-3xl font-bold text-[#0000007d] translate-x-[-100px]">{`${percent}%`}</span>
    </>
  );
};

export default ProgressCircle;
