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

export const Carousel = () => {
  const [moviesImg, setMoviesImg] = useState<ApiResult>();

  useEffect(() => {
    fetch("src/utils/mocks/MoviesPopular.json")
      .then((response) => response.json())
      .then((data) => setMoviesImg(data))
      .catch((err) => console.log(err));
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
          <SwiperSlide key={item.id}>
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
