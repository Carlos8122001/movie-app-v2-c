import { useEffect, useState } from "react";
import { ApiResult } from "../interfaces/Interfaces";
import { ApiMoviesResult } from "../interfaces/Interfaces";
import { MoviesCard } from "../components/MoviesCard";
import { Pagination } from "../components/Pagination";
import { getFecht } from "../utils/services/Fetch";
const API_DISCOVER: string = import.meta.env.VITE_API_MOVIE_DISCOVER;

export const MoviesAll = () => {
  const [movies, setMovies] = useState<ApiResult>();
  const [page, setPage] = useState<number>(1);

  const handleNext = (): void => {
    if (page === 5) return;
    setPage(page + 1);
  };

  const handlePrev = (): void => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const getMoviesAll = async (api: string, params: number | string) => {
    try {
      const response = await getFecht(api, params);
      setMovies(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMoviesAll(API_DISCOVER, page);
    window.scrollTo({
      top: 0,
    });
  }, [page]);

  return (
    <>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10 px-10 py-10 opacity-70">
        {movies?.results.map((item: ApiMoviesResult) => (
          <MoviesCard
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
