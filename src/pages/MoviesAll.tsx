import { useEffect, useState } from "react";
import { ApiResult } from "../interfaces/Interfaces";
import { ApiMoviesResult } from "../interfaces/Interfaces";
import { Movie } from "../components/Movie";
import { Pagination } from "../components/Pagination";

export const MoviesAll = () => {
  const [movies, setMovies] = useState<ApiResult>();
  const [page, setPage] = useState<number>(1);

  const API_MOVIE_DISCOVER: string = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=es-US&page=${page}&sort_by=popularity.desc`;

  const handleNext = (): void => {
    setPage(page + 1);
  };

  const handlePrev = (): void => {
    setPage(page - 1);
  };

  useEffect(() => {
    fetch(`${API_MOVIE_DISCOVER}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWE5NzRiNmE0NmEwMDkwMWJmNzQwMDIyYmI1M2YzMyIsInN1YiI6IjY1NzVmOGM3NGJmYTU0MDEzODdmYTViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z3Bf_O6uoPis0PpGsGiox1L6Fgsnax-20RI9Wv-tj6I",
      },
    })
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, [API_MOVIE_DISCOVER]);

  return (
    <>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10 px-10 py-10 opacity-70">
        {movies?.results.map((item: ApiMoviesResult) => (
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
      <Pagination Next={handleNext} Prev={handlePrev} PageStatus={page} />
    </>
  );
};
