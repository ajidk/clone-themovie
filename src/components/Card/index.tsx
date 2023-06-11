import React from "react";
import ProgressCircle from "./ProgressCircle";

export interface cardMovieState {
  id?: string;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: string;
}

const CardMovie: React.FC<cardMovieState> = ({
  poster_path,
  title,
  release_date,
  vote_average,
}) => {
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

      <ProgressCircle vote_average={vote_average} className='absolute bottom-16 left-4 h-12 w-12' />
    </div>
  );
};

export default CardMovie;
