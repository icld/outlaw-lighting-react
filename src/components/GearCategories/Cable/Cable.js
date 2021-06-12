import React from "react";
import GearItemCard from "../../GearItemCard/GearItemCard";
import BackButton from "../../Buttons/BackButton";

import fixtures from "./CableData";

const Cable = (props) => {
  return (
    <div className="h-auto bg-black">
      <BackButton />
      <div className=" text-white flex flex-wrap m-auto">
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

export default Cable;
