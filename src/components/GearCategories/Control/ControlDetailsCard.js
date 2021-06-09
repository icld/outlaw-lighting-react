import React from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import ControlData from "../Control/ControlData";

// import { NavLink } from "react-router-dom";

const ControlDetailsCard = (props) => {
  const match = props.match.params.item;

  return (
    <div>
      {ControlData.map((item) => {
        console.log(item.nameID, match);

        if (match === item.nameID) {
          return <DetailsCard item={item} />;
        }
        return null;
      })}
    </div>
  );
};

export default ControlDetailsCard;
