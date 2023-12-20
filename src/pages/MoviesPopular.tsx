import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";
import NavBar from "../components/NavBar";
import { ApiMoviesResult, ApiResult } from "../interfaces/Interfaces";
import { Movie } from "../components/Movie";
import { Pagination } from "../components/Pagination";

export const MoviesPopular = () => {
  const [moviesPopular, setMoviesPopular] = useState<ApiResult>();
  const [pages, setPages] = useState<number>(1);
  const API_MOVIE_POPULAR: string = `https://api.themoviedb.org/3/movie/popular?language=es-US&page=${pages}`;

  useEffect(() => {
    fetch(`${API_MOVIE_POPULAR}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWE5NzRiNmE0NmEwMDkwMWJmNzQwMDIyYmI1M2YzMyIsInN1YiI6IjY1NzVmOGM3NGJmYTU0MDEzODdmYTViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z3Bf_O6uoPis0PpGsGiox1L6Fgsnax-20RI9Wv-tj6I",
      },
    })
      .then((response) => response.json())
      .then((data) => setMoviesPopular(data))
      .catch((err) => console.log(err));
  }, [API_MOVIE_POPULAR]);

  const handleNext = (): void => {
    setPages(pages + 1);
  };

  const handlePrev = (): void => {
    setPages(pages - 1);
  };

  return (
    <>
      <div className=" bg-[#0D0C0F] w-full h-full flex flex-col items-center">
        <NavBar />
        <Carousel />
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10 px-10 py-10 opacity-70">
          <h2 className="text-5xl text-white text-start pl-5 font-semibold my-5 col-span-full">
            Populares
          </h2>
          {moviesPopular?.results.map((item: ApiMoviesResult) => (
            <Movie
              key={item.id}
              title={item.title}
              backdrop_path={item.backdrop_path}
              original_title={item.original_title}
              vote_average={item.vote_average}
              id={item.id}
            />
          ))}
        </div>
        <Pagination Next={handleNext} Prev={handlePrev} PageStatus={pages} />
      </div>
    </>
  );
};
