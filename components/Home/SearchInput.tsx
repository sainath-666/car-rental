import React from "react";

function SearchInput() {
  return (
    <div className="mt-5">
      <h2 className="text-center text-[20px] text-gray-200 mb-3">
        Lets Search What You Need
      </h2>
      <div className="flex  justify-center">
        <div className="flex  p-1 px-5 gap-2 rounded-full divide-x  bg-gray-500">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Location"
              className="p-2 outline-none  font-semibold "
            />
          </div>
          <div>
            <input
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              min={new Date().toISOString().split("T")[0]}
              className="p-2 outline-none  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
