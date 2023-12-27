import React from "react";
import { ApiMoviesResult } from "../interfaces/Interfaces";

export const MoviesCarousel: React.FC<ApiMoviesResult> = (movies) => {
  const API_IMG: string = "https://image.tmdb.org/t/p/original/";
  const moviesIMG: string = API_IMG + movies.backdrop_path;

  return (
    <>
      <section className={`w-full h-screen text-white`}>
        <img
          src={moviesIMG}
          alt={movies.original_title}
          className="w-full h-full bg-no-repeat object-cover object-top absolute z-0"
        />
        <span className="w-full h-full flex items-start justify-center lg:justify-center flex-col bg-opacity-60 bg-[#0D0C0F] gap-y-2 p-5 relative z-50">
          <h1 className="text-3xl text-white font-extrabold">{movies.title}</h1>
          <p className="w-full lg:w-[40%] text-start text-sm lg:text-lg text-gray-300">
            {movies.overview}
          </p>
        </span>
      </section>
    </>
  );
};
