import React from "react";
import data from "../Utils/citis.js";
import SingleCity from "./SingleCity.jsx";

const cities = data.filter((c) => !c.text.toLowerCase().includes("do not use"));

const DelCities = () => {
  return (
    <div className="mx-auto w-full max-w-310 px-4 py-10">
      <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
        Cities with food delivery
      </h2>
      <div className="mx-auto my-10 grid w-full max-w-310 auto-cols-80 grid-flow-col grid-rows-2 gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-4 pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {cities.map((item) => (
          <SingleCity key={item.link} item={item} />
        ))}
      </div>
    </div>

  );
};

export default DelCities;