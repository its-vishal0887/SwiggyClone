import React from "react";
import data from "../Utils/tester.js"; // { data } nahi, default import
import FoodCard from "./FoodCard.jsx";

const FoodOption = () => {
  const foodItems = Array.isArray(data) ? data : [];

  return (
    <section className="mx-auto w-full max-w-310 px-4 py-10">
      <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
        Order our best food options
      </h2>

      {foodItems.length ? (
        <div className="grid grid-flow-col grid-rows-2 auto-cols-32.5 md:auto-cols-45 gap-x-6 md:gap-x-12 gap-y-4 overflow-x-auto overflow-y-hidden scroll-smooth pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
          {foodItems.map((item) => (
            <FoodCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No food items found.</p>
      )}
    </section>
    
  );
};

export default FoodOption;