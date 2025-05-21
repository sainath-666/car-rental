import React from "react";

function CarFiltersOption() {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px]">Car Catlog</h2>
        <h2>Explore Our Cars You Might Likes</h2>
      </div>
      <div className="flex gap-5">
        <select defaultValue="Pick a color" className="select">
          <option disabled={true}>Price</option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select defaultValue="Pick a color" className="select hidden md:block">
          <option disabled={true}>Manufactural</option>
          <option>Honda</option>
          <option>BMW</option>
          <option>Toyoto</option>
        </select>
      </div>
    </div>
  );
}

export default CarFiltersOption;
