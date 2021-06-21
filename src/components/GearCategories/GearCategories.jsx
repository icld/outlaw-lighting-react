import React from "react";
import GearCategoryCard from "../GearCategoryCard/GearCategoryCard";

import categories from "./categoryData";

const GearCategories = () => {
  return (
    <div className="bg-white flex flex-wrap m-auto h-auto relative">
      {categories.map((cat, index) => (
        <GearCategoryCard
          name={cat.name}
          image={cat.image}
          key={cat.name}
          index={index}
          url={`/gear/${cat.url}`}
        />
      ))}
    </div>
  );
};

export default GearCategories;
