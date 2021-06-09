import React from "react";
import GearCategories from "../GearCategories/GearCategories";
import BackButton from "../Buttons/BackButton";
const Gear = () => {
  return (
    <div className="h-auto bg-white">
      <BackButton className="" />
      <GearCategories />
    </div>
  );
};

export default Gear;
