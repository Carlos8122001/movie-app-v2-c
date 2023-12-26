import React from "react";
import { ApiMoviesResult } from "../interfaces/Interfaces";
import { useNavigate } from "react-router-dom";

const API_IMG: string = "https://image.tmdb.org/t/p/original/";

export const MoviesCard: React.FC<ApiMoviesResult> = (movies) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-full h-[70vh] lg:h-[60vh] rounded-md flex items-start flex-col gap-2 cursor-pointer transition-all ease-linear"
        onClick={() => {
          navigate(`/peliculas/detalles/${movies.id}`);
        }}
      >
        <img
          src={API_IMG + movies.backdrop_path}
          alt={movies.original_title}
          className="rounded-md object-center object-cover h-full"
        />
        <span className="text-white">
          <h2 className="font-medium text-lg">{movies.title}</h2>
          <div className="flex flex-row items-center gap-x-2">
            <img src="\img\start.svg" alt="start" className="w-5 h-5" />
            <h6>{movies.vote_average}</h6>
          </div>
        </span>
      </div>
    </>
  );
};
