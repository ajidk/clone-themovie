import React from "react";
import ProgressCircle from "./ProgressCircle";

export interface cardMovieState {
  id?: string;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average?: string;
  className?: string;
  classNameImg?: string;
  first_air_date?: string;
  name?: string;
}

const CardMovie: React.FC<cardMovieState> = ({
  poster_path,
  title,
  release_date,
  vote_average,
  className,
  classNameImg,
}) => {
  return (
    <div
      className={`relative top-0 left-0 flex flex-wrap items-start border border-[#e3e3e3] overflow-hidden max-w-[200px] mt-30 rounded-lg ${className}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
        className={`rounded-t-lg min-h-[180px] object-cover w-full ${classNameImg}`}
        height={180}
        width={180}
      />
      <div className="p-4 w-full">
        <div className="truncate font-semibold text-black">{title}</div>
        <div className="font-light truncate">{release_date}</div>
      </div>

      {vote_average && (
        <ProgressCircle
          vote_average={vote_average}
          className="absolute bottom-16 left-4 h-34 w-34 text-10"
        />
      )}
    </div>
  );
};

export default CardMovie;
