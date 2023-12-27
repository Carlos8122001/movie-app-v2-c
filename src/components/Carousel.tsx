import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { ApiMoviesResult, ApiResult } from "../interfaces/Interfaces";
import { MoviesCarousel } from "./MoviesCarousel";
import { getFecht } from "../utils/services/Fetch";
import { useNavigate } from "react-router-dom";
const API_TV: string = import.meta.env.VITE_API_MOVIE_RATED;

export const Carousel = () => {
  const navigate = useNavigate();

  const [moviesImg, setMoviesImg] = useState<ApiResult>();

  const getMoviesAll = async (api: string) => {
    try {
      const response = await getFecht(api);
      setMoviesImg(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMoviesAll(API_TV);
  }, []);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={{
          enabled: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper bg-[#0D0C0F] h-[80vh] lg:h-[70vh] w-full overflow-hidden flex justify-center items-center mx-auto shadow-2xl"
      >
        {moviesImg?.results.map((item: ApiMoviesResult) => (
          <SwiperSlide
            className="cursor-pointer"
            key={item.id}
            onClick={() => navigate(`/peliculas/detalles/${item.id}`)}
          >
            <MoviesCarousel
              title={item.title}
              overview={item.overview}
              backdrop_path={item.backdrop_path}
              vote_average={item.vote_average}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
