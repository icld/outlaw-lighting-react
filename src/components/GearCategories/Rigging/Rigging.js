import React from "react";
import GearItemCard from "../../GearItemCard/GearItemCard";
import BackButton from "../../Buttons/BackButton";

import fixtures from "./RiggingData";

const Rigging = () => {
  return (
    <div className="h-auto bg-black">
      <BackButton />
      <div className=" text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-10">
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

export default Rigging;
