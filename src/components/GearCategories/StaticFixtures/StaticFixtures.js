import React from "react";
import GearItemCard from "../../GearItemCard/GearItemCard";
import GearNav from "../../Gear/GearNav";
import fixtures from "./StaticFixturesData";

const StaticFixtures = () => {
  return (
    <div className="h-auto bg-black">
      <GearNav />
      <div className=" text-white flex flex-wrap ">
        {fixtures.map((fixture, index) => (
          <GearItemCard
            name={fixture.name}
            image={fixture.image}
            desc={fixture.desc}
            info={fixture.info}
            specs={fixture.specs}
            video={fixture.vid}
            url={fixture.url}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default StaticFixtures;
