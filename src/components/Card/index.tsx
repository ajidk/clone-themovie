import React, { CSSProperties } from "react";

export interface cardMovieState {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: string;
}

interface CustomCSSProperties extends CSSProperties {
  "--value"?: string;
  "--size"?: string;
  "--thickness"?: string;
}

const CardMovie: React.FC<cardMovieState> = ({
  poster_path,
  title,
  release_date,
  vote_average,
}) => {
  const customStyles: CustomCSSProperties = {
    "--value": vote_average.replace(".", ""),
    "--size": "12rem",
    "--thickness": "2px",
  };
  return (
    <div className="rounded-lg  bg-white drop-shadow relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
        className="rounded-t-lg"
      />
      <div className="p-4">
        <div className="truncate font-semibold text-black">{title}</div>
        <div className="font-light">{release_date}</div>
      </div>

      <div
        className="radial-progress text-green-500 flex flex-row items-center bg-black w-14 h-14 absolute bottom-16 left-4"
        style={customStyles}
      >
        <div className="text-white flex justify-start items-start">
          {vote_average.replace(".", "")} <span className="text-[8px]">%</span>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
