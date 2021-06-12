import React from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import fixtures from "../Cable/CableData";

// import { NavLink } from "react-router-dom";

const CableDetailsCard = (props) => {
  const match = props.match.params.item;

  return (
    <div>
      {fixtures.map((item) => {
        console.log(item.nameID, match);

        if (match === item.nameID) {
          return <DetailsCard item={item} />;
        }
        return null;
      })}
    </div>
  );
};

export default CableDetailsCard;
