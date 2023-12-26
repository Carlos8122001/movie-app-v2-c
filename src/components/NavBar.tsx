import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavItems } from "../types/Types";

export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false);

  const NavbarItems: NavItems = [
    { name: "Peliculas", link: "/" },
    { name: "Populares", link: "/peliculas/populares" },
    { name: "Tendencias", link: "/peliculas/tendencias" },
  ];

  const handleMenu = (): void => {
    return setOpen(!open);
  };

  const handleClose = (): void => {
    return setOpen(false);
  };
  return (
    <>
      <header className="flex w-full h-20 justify-between gap-x-4 items-center text-white px-5 lg:px-10 bg-transparent transition-all ease-linear ">
        <button className="md:hidden" onClick={handleMenu}>
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 24 24"
              className="w-10 h-10 text-white"
            >
              <path
                fill="currentColor"
                d="M4 18q-.425 0-.712-.288T3 17q0-.425.288-.712T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12q0-.425.288-.712T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7q0-.425.288-.712T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <path
                fill="#ffffff"
                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
              />
            </svg>
          )}
        </button>
        <nav className="hidden md:flex flex-row gap-x-5">
          {NavbarItems.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.link}
              className={({ isActive }) =>
                isActive
                  ? "bg-red-700 rounded-full px-4 py-2"
                  : "bg-transparent px-4 py-2 text-base cursor-pointer hover:bg-red-700 transition-all ease-linear rounded-full"
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </nav>
        <span className="flex flex-row gap-3">
          <NavLink
            to={"/peliculas/buscar"}
            className={({ isActive }) =>
              isActive
                ? "bg-red-700 rounded-full px-4 py-2"
                : "bg-transparent px-4 py-2 text-base cursor-pointer hover:bg-red-700 transition-all ease-linear rounded-full"
            }
          >
            <svg
              className="w-6 h-6"
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
          </NavLink>
          <button className="bg-white rounded-full px-2 lg:px-4 py-2 text-sm lg:text-base text-black font-medium">
            Registrate
          </button>
          <button className="rounded-full px-2 lg:px-4 py-2 text-sm lg:text-base text-white font-medium hover:bg-red-700 transition-all ease-linear">
            Iniciar sesión
          </button>
        </span>
      </header>
      <nav
        className={`bg-[#141416] w-full h-auto top-20 flex flex-col gap-y-5 py-10 md:hidden ${
          open ? "flex" : "hidden"
        }`}
      >
        {NavbarItems.map((nav, index) => (
          <NavLink
            key={index}
            to={nav.link}
            className={({ isActive }) =>
              isActive
                ? "bg-red-700 rounded-full py-4 w-[95%] mx-auto text-white text-xl text-center"
                : "mx-auto bg-[#0D0C0F] w-[95%] text-white text-center text-xl py-4 cursor-pointer hover:bg-red-700 transition-all ease-linear rounded-full"
            }
            onClick={handleClose}
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
