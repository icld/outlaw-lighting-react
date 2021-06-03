import React from "react";
import GearCategoryCard from "../GearCategoryCard/GearCategoryCard";

import categories from "./categoryData";

const GearCategories = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10">
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
