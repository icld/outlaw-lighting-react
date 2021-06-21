import React from "react";
import GearNav from "./GearNav";
import GearCategories from "../GearCategories/GearCategories";
// import GearCats from "./GearCats";

// import BackButton from "../Buttons/BackButton";
const Gear = ({ match, props }) => {
  console.log(match.params);
  return (
    <div className="h-auto">
      <GearNav />
      <GearCategories category={match.params} />
    </div>
  );
};

export default Gear;
