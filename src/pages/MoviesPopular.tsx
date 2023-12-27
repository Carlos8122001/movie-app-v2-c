import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { ApiMoviesResult, ApiResult } from "../interfaces/Interfaces";
import { MoviesCard } from "../components/MoviesCard";
import { Pagination } from "../components/Pagination";
import { getFecht } from "../utils/services/Fetch";
import Footer from "../components/Footer";

export const MoviesPopular = () => {
  const [moviesPopular, setMoviesPopular] = useState<ApiResult>();
  const [pages, setPages] = useState<number>(1);
  const API_MOVIE_POPULAR: string = import.meta.env.VITE_API_MOVIE_POPULAR;

  const handleNext = (): void => {
    if (pages === 5) return;
    setPages(pages + 1);
  };

  const handlePrev = (): void => {
    if (pages === 1) return;
    setPages(pages - 1);
  };

  const getPopularMoviesAll = async (api: string, params: number | string) => {
    try {
      const response = await getFecht(api, params);
      setMoviesPopular(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMoviesAll(API_MOVIE_POPULAR, pages);
    window.scrollTo({
      top: 0,
    });
  }, [API_MOVIE_POPULAR, pages]);

  return (
    <>
      <div className=" bg-[#141416] w-full h-full flex flex-col items-center">
        <NavBar />
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10 px-10 opacity-70">
          <h2 className="text-5xl text-white text-start pl-5 font-semibold my-5 col-span-full">
            Populares
          </h2>
          {moviesPopular?.results.map((item: ApiMoviesResult) => (
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
        <Pagination Next={handleNext} Prev={handlePrev} PageStatus={pages} />
        <Footer />
      </div>
    </>
  );
};
