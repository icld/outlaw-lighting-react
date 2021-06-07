import React from "react";

const DetailsCard = (props) => {
  const item = props.item;

  return (
    <div>
      return (
      <div className="my-10  w-4/6 group h-auto m-auto rounded-xl bg-white relative transition-all duration-300 ring-4 ring-blue-500 justify-center items-center flex flex-col">
        <h2 className="   text-6xl mx-14 my-14 "> {item.name}</h2>

        <div className="grid  grid-cols-1 lg:grid-cols-2  ">
          <div className="mx-14  h-full shadow-xl transition-all duration-300 overflow-hidden flex items-center justify-center ">
            <img src={item.image} alt="lighting fixture" className="  w-full" />
          </div>
          <div className="   flex items-center justify-center">
            <ul className="mx-auto prose-2xl  list-disc  w-11/12  align-middle">
              {item.specs.map((spec) => (
                <li className=" list-item">{spec}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className=" text-xl mx-14 my-14 m-auto text-justify ">{item.info}</p>

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
