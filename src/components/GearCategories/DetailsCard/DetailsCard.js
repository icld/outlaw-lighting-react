import React from "react";

// import { NavLink } from "react-router-dom";

const DetailsCard = (props) => {
  const item = props.item;

  return (
    <div>
      return (
      <div className="prose prose-lg group h-auto m-auto rounded-xl bg-white relative transition-all duration-300 ring-4 ring-blue-500 justify-center flex flex-col">
        <h2 className=" "> {item.name}</h2>

        <div className="grid grid-cols-2">
          <div className="w-full h-full cursor-pointer shadow-2xl transition-all duration-300 overflow-hidden ">
            <img
              src={item.image}
              alt="lighting fixture"
              className="mx-auto pt-4 object-contain"
            />
          </div>
          <div>
            <ul>
              {item.specs.map((spec) => (
                <li>{spec}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="prose prose-lg prose-black ">{item.info}</p>
        <div>
          <iframe
            width="560"
            height="315"
            src={item.vid}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      );
    </div>
  );
};

export default DetailsCard;
