import React from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import StaticFixturesData from "../StaticFixtures/StaticFixturesData";

// import { NavLink } from "react-router-dom";

const StaticFixturesDetailsCard = (props) => {
  const match = props.match.params.item;

  return (
    <div>
      {StaticFixturesData.map((item) => {
        console.log(item.nameID, match);

        if (match === item.nameID) {
          return <DetailsCard item={item} />;
        }
        return null;
      })}
    </div>
  );
};

export default StaticFixturesDetailsCard;
