import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import { MoviesDetails } from "../components/MoviesDetails";
import { MoviesPopular } from "../pages/MoviesPopular";
import { SearchMovie } from "../pages/SearchMovie";
import { MoviesTrending } from "../pages/MoviesTrending";

export const CustomRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
    },

    {
      path: "/peliculas/populares",
      element: <MoviesPopular />,
    },

    {
      path: "/peliculas/tendencias",
      element: <MoviesTrending />,
    },

    {
      path: "/peliculas/detalles/:id",
      element: <MoviesDetails />,
    },
    {
      path: "/peliculas/buscar",
      element: <SearchMovie />,
    },
  ]);
};
