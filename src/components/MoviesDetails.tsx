import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ApiMoviesDetailsResult } from "../interfaces/Interfaces";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { LoaderMovie } from "../components/LoaderMovie";

export const MoviesDetails = () => {
  const movieId = useParams().id;
  const navigate = useNavigate();
  const API_IMG: string = "https://image.tmdb.org/t/p/original/";
  const [movieData, setmovieData] = useState<ApiMoviesDetailsResult>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos&language=es-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWE5NzRiNmE0NmEwMDkwMWJmNzQwMDIyYmI1M2YzMyIsInN1YiI6IjY1NzVmOGM3NGJmYTU0MDEzODdmYTViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z3Bf_O6uoPis0PpGsGiox1L6Fgsnax-20RI9Wv-tj6I",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setmovieData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [movieId]);

  const IMG_MOCK: string = API_IMG + movieData?.poster_path;

  return (
    <>
      {loading === true ? (
        <LoaderMovie />
      ) : (
        <section className="w-full h-full lg:h-full overflow-hidden bg-[#17161B]">
          <div className="w-[90%] h-full mx-auto flex flex-col lg:flex-col items-center justify-center py-10">
            <div className="w-full lg:w-[70%] h-screen  overflow-hidden mb-5">
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
                src={IMG_MOCK}
                alt="mock"
                className="w-full h-full rounded-md  object-fill object-right bg-no-repeat"
              />
            </div>

            <span className="text-white flex flex-col gap-4 w-full lg:w-[70%] ">
              <h1 className="text-5xl font-bold">{movieData?.title}</h1>
              <h2 className="text-gray-400 text-lg">
                Fecha {movieData?.release_date}
              </h2>
              <p className="text-gray-400 text-xl">{movieData?.overview}</p>
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
                <h6>Puntuación {movieData?.vote_average}</h6>
              </div>
              <span className="text-white flex flex-row flex-nowrap gap-4">
                <h2 className="text-lg font-semibold">Tags:</h2>
                {movieData?.genres.map((tags) => (
                  <h3
                    key={tags.id}
                    className="bg-red-700 p-2 rounded-md text-center"
                  >
                    {tags.name}
                  </h3>
                ))}
              </span>
              <div className="w-full flex flex-row overflow-x-scroll gap-x-5 rounded-md">
                {movieData?.videos.results?.map((item) => (
                  <YouTube
                    key={item.id}
                    videoId={item.key}
                    opts={{
                      height: "390",
                      width: "640",
                    }}
                  />
                ))}
              </div>
            </span>
          </div>
        </section>
      )}
    </>
  );
};
