import React from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import AutomatedData from "./AutomatedData";

// import { NavLink } from "react-router-dom";

const AutomatedDetailsCard = (props) => {
  const match = props.match.params.item;

  return (
    <div>
      {AutomatedData.map((item) => {
        console.log(item.nameID, match);

        if (match === item.nameID) {
          return <DetailsCard item={item} />;
        }
        return null;
      })}
    </div>
  );
};

export default AutomatedDetailsCard;
