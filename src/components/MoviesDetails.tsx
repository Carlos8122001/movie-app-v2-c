import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ApiMoviesDetailsResult } from "../interfaces/Interfaces";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { LoaderMovie } from "../components/LoaderMovie";
import { getFecht } from "../utils/services/Fetch";
const API_MOVIES_DETAILS = import.meta.env.VITE_API_MOVIE_DETAILS;
const API_IMG: string = import.meta.env.VITE_API_IMG;

export const MoviesDetails = () => {
  const Id = useParams().id;
  const movieId = `${Id}?append_to_response=videos&language=es-US`;
  const navigate = useNavigate();
  const [moviesData, setmoviesData] = useState<ApiMoviesDetailsResult>();
  const [loading, setLoading] = useState<boolean>(true);

  const getDetailsMovies = async (api: string, params: number | string) => {
    try {
      const response = await getFecht(api, params);
      setmoviesData(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetailsMovies(API_MOVIES_DETAILS, movieId);
  }, [movieId]);

  return (
    <>
      {loading === true ? (
        <LoaderMovie />
      ) : (
        <section
          className={`w-full h-full lg:h-full overflow-hidden bg-[#17161B]`}
        >
          <img
            src={API_IMG + moviesData?.poster_path}
            alt="mock"
            className="w-full h-screen rounded-md  object-fill object-right bg-no-repeat absolute z-0 opacity-20 blur-sm"
          />
          <div className="w-[80%] lg:w-[95%] h-full mx-auto flex flex-col  lg:items-start justify-center py-10 relative z-50 lg:flex-row lg:gap-x-10">
            <div className="w-full lg:w-[50%] h-[90vh] overflow-hidden mb-5">
              <div className="flex flex-row flex-nowrap gap-3 items-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 bg-red-700 p-2 rounded-md cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <path
                    fill="#ffffff"
                    d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.425 12q0-.2.063-.375T4.7 11.3l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.825Z"
                  />
                </svg>
                <h1 className="text-white text-lg">Volver</h1>
              </div>
              <img
                src={API_IMG + moviesData?.poster_path}
                alt="mock"
                className="w-full h-full rounded-md  object-fill object-right bg-no-repeat"
              />
            </div>

            <span className="text-white flex flex-col gap-4 w-full lg:w-[50%]">
              <h1 className="text-5xl font-bold">{moviesData?.title}</h1>
              <h2 className="text-gray-300 text-lg">
                Fecha {moviesData?.release_date}
              </h2>
              <p className="text-gray-300 text-xl">{moviesData?.overview}</p>
              <div className="flex flex-row items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 36 36"
                  className="w-7 h-7"
                >
                  <path
                    fill="#faf200"
                    d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z"
                    className="clr-i-solid clr-i-solid-path-1"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                <h6>Puntuación {moviesData?.vote_average}</h6>
              </div>
              <span className="text-white flex flex-row flex-nowrap gap-4">
                <h2 className="text-lg font-semibold">Tags:</h2>
                {moviesData?.genres.map((tags) => (
                  <h3
                    key={tags.id}
                    className="bg-red-700 p-2 rounded-md text-center"
                  >
                    {tags.name}
                  </h3>
                ))}
              </span>
              <div
                className={`w-full flex flex-row gap-x-5 rounded-md  ${
                  moviesData?.videos.results.length !== 0
                    ? "overflow-x-auto"
                    : "overflow-hidden"
                }`}
              >
                {moviesData?.videos.results?.length === 0 ? (
                  <span className="w-full h-80 bg-gray-800 rounded-md">
                    <h1 className="text-xl font-medium text-white">
                      No hay trailers disponibles :(
                    </h1>
                  </span>
                ) : (
                  <YouTube
                    videoId={moviesData?.videos.results[0].key}
                    opts={{
                      height: "390",
                      width: "700",
                    }}
                  />
                )}
              </div>
            </span>
          </div>
        </section>
      )}
    </>
  );
};
