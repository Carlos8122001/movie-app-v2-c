import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import { MoviesDetails } from "../components/MoviesDetails";
import { MoviesPopular } from "../pages/MoviesPopular";

export const CustomRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
    },

    {
      path: "/tv",
      element: <MoviesPopular />,
    },

    {
      path: "/peliculas/detalles/:id",
      element: <MoviesDetails />,
    },
  ]);
};
