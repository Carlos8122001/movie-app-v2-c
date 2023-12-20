import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="w-full h-20 flex justify-normal gap-x-4 items-center text-white px-10 bg-transparent absolute top-0 z-50">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-red-700 rounded-md px-4 py-2"
              : "bg-transparent px-4 py-2 text-base cursor-pointer"
          }
        >
          Peliculas
        </NavLink>

        <NavLink
          to={"/tv"}
          className={({ isActive }) =>
            isActive
              ? "bg-red-700 rounded-md px-4 py-2"
              : "bg-transparent px-4 py-2 text-base cursor-pointer"
          }
        >
          Populares
        </NavLink>

        <a className="cursor-pointer p-2.5 ms-2 text-sm font-medium text-white rounded-md active:ring-2 focus:outline-none outline-none transition-all ease-linear duration-100">
          <svg
            className="w-4 h-4"
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
        </a>
      </nav>
    </>
  );
}
