import React from "react";
import GearCategoryCard from "../GearCategoryCard/GearCategoryCard";

import categories from "./categoryData";

const GearCategories = () => {
  return (
    <div
      className="bg-black h-auto
     flex flex-wrap m-auto"
    >
      {categories.map((cat, index) => (
        <GearCategoryCard
          name={cat.name}
          image={cat.image}
          key={cat.name}
          index={index}
          url={`/gear${cat.url}`}
        />
      ))}
    </div>
  );
};

export default GearCategories;
