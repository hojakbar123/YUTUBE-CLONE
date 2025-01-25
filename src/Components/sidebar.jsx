import React from "react";
import { categories } from "../utils/constant";

export default function Sidebar({ setSelectedCategory, selectedCategory }) {
  return (
    <div className="h-[90vh] min-w-60 p-4 flex flex-col gap-5 overflow-y-scroll scrollbar-width-1 scrollbar-thin">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          className={`${
            selectedCategory === category.name ? "bg-cherry text-white" : "bg-transparent text-cherry"
          } group px-6 transition max-h-[50px] min-w-[150px] ease-in duration-300 flex items-center gap-4 w-full rounded-full min-h-[45px] normal-case text-md hover:bg-cherry hover:text-white`}
        >
          <div className="!text-2xl">{category.icon}</div>
          <span className="text-sm font-semibold">{category.name}</span>
        </button>
      ))}
      <p className="px-6 hidden lg:block text-gray-100">Davlatbek 2024</p>
    </div>
  );
}
