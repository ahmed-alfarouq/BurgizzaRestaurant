import React from "react";

const Spinner = ({ className }: { className: string }) => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="#eee"
        strokeWidth="5"
      />

      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="#000"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="4.4 496"
        strokeDashoffset="0"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="501.4"
          to="0"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dasharray"
          values="4.4 496; 480 20.4; 4.4 496;"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default Spinner;
