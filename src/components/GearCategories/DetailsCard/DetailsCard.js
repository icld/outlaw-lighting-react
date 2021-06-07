import React from "react";

// import { NavLink } from "react-router-dom";

const DetailsCard = (props) => {
  const item = props.item;

  return (
    <div>
      return (
      <div className="my-10 w-11/12 prose prose-lg group h-auto m-auto rounded-xl bg-white relative transition-all duration-300 ring-4 ring-blue-500 justify-center flex flex-col">
        <h2 className=" m-10 pt-10"> {item.name}</h2>

        <div className="grid grid-cols-2  gap-10">
          <div className="mx-10 w-full h-full shadow-xl transition-all duration-300 overflow-hidden ">
            <img
              src={item.image}
              alt="lighting fixture"
              className="mx-auto pt-4 object-contain"
            />
          </div>
          <div>
            <ul className="mx-10 ">
              {item.specs.map((spec) => (
                <li>{spec}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="prose prose-lg prose-black p-4 px-10 m-auto text-justify">
          {item.info}
        </p>

        {item.vid ? (
          <div>
            <iframe
              width="560"
              height="315"
              src={item.vid}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="m-auto mb-10 object-cover shadow-2xl"
            ></iframe>
          </div>
        ) : null}
      </div>
      );
    </div>
  );
};

export default DetailsCard;
