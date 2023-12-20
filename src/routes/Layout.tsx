import { Carousel } from "../components/Carousel";
import NavBar from "../components/NavBar";
import { MoviesAll } from "../pages/MoviesAll";

export default function Layout() {
  return (
    <div className="w-full h-full bg-[#0D0C0F] flex flex-col justify-center items-center mx-auto">
      <NavBar />
      <Carousel />
      <MoviesAll />
    </div>
  );
}
