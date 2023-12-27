import { useEffect, useState } from "react";
import { ApiMoviesResult, ApiResult } from "../interfaces/Interfaces";
import { getFecht } from "../utils/services/Fetch";
import { MoviesCard } from "../components/MoviesCard";
import { Pagination } from "../components/Pagination";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const API_TRENDING: string = import.meta.env.VITE_API_MOVIE_TRENDING;

export const MoviesTrending = () => {
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
    getMoviesAll(API_TRENDING, page);
    window.scrollTo({
      top: 0,
    });
  }, [page]);
  return (
    <>
      <div className=" bg-[#141416] w-full h-full flex flex-col items-center">
        <NavBar />
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10 px-10 opacity-70">
          <h2 className="text-5xl text-white text-start pl-5 font-semibold my-5 col-span-full">
            Tendencias
          </h2>
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
        <Footer />
      </div>
    </>
  );
};
