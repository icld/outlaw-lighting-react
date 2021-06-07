import React from "react";
import GearItemCard from "../../GearItemCard/GearItemCard";

import fixtures from "./AtmosphereData";

const Atmosphere = (props) => {
  return (
    <div className="h-auto bg-black">
      <div className="w-auto text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6">
        {fixtures.map((fixture, index) => (
          <GearItemCard
            name={fixture.name}
            image={fixture.image}
            desc={fixture.desc}
            info={fixture.info}
            specs={fixture.specs}
            video={fixture.vid}
            url={fixture.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Atmosphere;
