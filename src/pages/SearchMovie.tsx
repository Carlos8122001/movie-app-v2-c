import { useState } from "react";
import NavBar from "../components/NavBar";
import { MoviesAll } from "./MoviesAll";
import { ApiMoviesResult, ApiResult } from "../interfaces/Interfaces";
import { getFecht } from "../utils/services/Fetch";
import { MoviesCard } from "../components/MoviesCard";
import Footer from "../components/Footer";
const API_SEARCH: string = import.meta.env.VITE_API_SEARCH;

export const SearchMovie = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<ApiResult>();
  const paramsAPI: string = `${query}&include_adult=true&language=es-US`;

  const getMoviesAll = async (api: string, params: number | string) => {
    try {
      const response = await getFecht(api, params);
      setResult(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="w-full h-full flex flex-col justify-center items-center bg-[#141416]">
        <NavBar />
        <form
          className="w-[96%] pt-5"
          onSubmit={(event) => {
            event.preventDefault();
            if (query === "") return;
            getMoviesAll(API_SEARCH, paramsAPI);
          }}
        >
          <div className="flex flex-row h-16 bg-[#141416] items-center gap-x-3 px-5 rounded-full border-4 border-red-700">
            <input
              type="text"
              placeholder="¿Que peli estas buscando?"
              className="w-full h-16 rounded-md outline-none text-lg lg:text-xl bg-transparent border-none text-gray-400"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit">
              <svg
                className="w-6 h-6 text-red-700 active:scale-110 transition-all"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>

        {result ? (
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10 px-10 py-10 opacity-70">
            {result?.results.map((item: ApiMoviesResult) => (
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
        ) : (
          <MoviesAll />
        )}

        <Footer />
      </section>
    </>
  );
};
