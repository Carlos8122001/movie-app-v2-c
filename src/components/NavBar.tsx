export default function NavBar() {
  return (
    <>
      <nav className="bg-gray-800 w-full h-20 flex justify-center items-center my-5">
        <form
          className="flex items-center w-[20%]"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-700 border-2 border-transparent text-gray-400 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5 transition-all ease-linear duration-75 outline-none"
              placeholder="Search branch name..."
            />
          </div>
          <button
            type="button"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-full border border-blue-700 hover:bg-blue-800 active:ring-2 focus:outline-none focus:ring-blue-300  outline-none transition-all ease-linear duration-100"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </nav>
    </>
  );
}
