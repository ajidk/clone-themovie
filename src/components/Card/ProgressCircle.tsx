import React, { CSSProperties } from "react";
interface CustomCSSProperties extends CSSProperties {
  "--value"?: string;
  "--size"?: string;
  "--thickness"?: string;
}

interface circleState {
  vote_average: string;
  className?: string | unknown;
}

const ProgressCircle: React.FC<circleState> = ({ vote_average, className }) => {
  const customStyles: CustomCSSProperties = {
    "--value": vote_average.replace(".", ""),
    "--size": "12rem",
    "--thickness": "2px",
  };
  return (
    <div
      className={`radial-progress text-green-500 flex flex-row items-center bg-black w-14 h-14 ${className}`}
      style={customStyles}
    >
      <div className="text-white flex justify-start items-start">
        {vote_average.replace(".", "")} <span className="text-[8px]">%</span>
      </div>
    </div>
  );
};

export default ProgressCircle;
