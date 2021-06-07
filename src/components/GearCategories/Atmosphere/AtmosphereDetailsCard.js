import React from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import AtmosphereData from "../Atmosphere/AtmosphereData";

// import { NavLink } from "react-router-dom";

const AtmosphereDetailsCard = (props) => {
  const match = props.match.params.item;

  return (
    <div>
      {AtmosphereData.map((item) => {
        console.log(item.nameID, match);

        if (match === item.nameID) {
          return <DetailsCard item={item} />;
        }
        return null;
      })}
    </div>
  );
};

export default AtmosphereDetailsCard;
