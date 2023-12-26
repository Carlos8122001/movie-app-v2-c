import { HandlePage } from "../types/Types";

export const Pagination = (props: HandlePage) => {
  const PagesItems = [
    {
      id: 1,
      value: 1,
    },

    {
      id: 2,
      value: 2,
    },

    { id: 3, value: 3 },

    {
      id: 4,
      value: 4,
    },

    {
      id: 5,
      value: 5,
    },
  ];
  return (
    <>
      <nav aria-label="Page navigation example" className="my-5">
        <ul className="flex items-center -space-x-px h-10 text-base gap-x-2">
          <button
            onClick={props.Prev}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-200 rounded-md  hover:text-red-700 bg-[#0D0C0F] transition-all"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>

          {PagesItems.map((item) => (
            <li key={item.id}>
              <button
                className={`flex items-center rounded-md justify-center px-4 cursor-default h-10 leading-tight text-gray-200 ${
                  item.id === props.PageStatus ? "bg-red-700" : "bg-[#0D0C0F]"
                }`}
              >
                {item.value}
              </button>
            </li>
          ))}

          <button
            onClick={props.Next}
            className="flex items-center justify-center rounded-md px-4 h-10 leading-tight text-gray-200 bg-[#0D0C0F] hover:text-red-700 transition-all"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </ul>
      </nav>
    </>
  );
};
