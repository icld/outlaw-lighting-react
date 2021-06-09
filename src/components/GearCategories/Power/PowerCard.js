import React from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import RiggingData from "../Rigging/RiggingData";

// import { NavLink } from "react-router-dom";

const RiggingDetailsCard = (props) => {
  const match = props.match.params.item;

  return (
    <div>
      {RiggingData.map((item) => {
        console.log(item.nameID, match);

        if (match === item.nameID) {
          return <DetailsCard item={item} />;
        }
        return null;
      })}
    </div>
  );
};

export default RiggingDetailsCard;
