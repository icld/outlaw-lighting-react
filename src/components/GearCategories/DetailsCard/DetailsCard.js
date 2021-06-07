import React from "react";

const DetailsCard = (props) => {
  const item = props.item;

  return (
    <div>
      return (
      <div className="my-10 sm:mx-4 lg:m-auto lg:w-11/12 group h-auto rounded-xl bg-white relative transition-all duration-300 ring-4 ring-blue-500 justify-center items-center flex flex-col">
        <h2 className="   text-6xl mx-14 my-14 ">{item.name}</h2>

        <div className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2  items-center">
          <div className="lg:ml-14 lg:mr-7 h-full shadow-xl transition-all duration-300 overflow-hidden flex items-center justify-center ">
            <img src={item.image} alt="lighting fixture" className="w-full" />
          </div>
          <div className="    items-center ">
            <ul className="lg:mr-14 lg:ml-7 p-14 border-transparent shadow-lg prose-xl  list-disc  align-middle">
              {item.specs.map((spec) => (
                <li className=" list-item">{spec}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" ">
          <p className=" leading-relaxed text-2xl mx-14 my-14 m-auto text-justify ">
            {item.info}
          </p>

          {item.vid ? (
            <div className=" w-full aspect-w-16 aspect-h-9">
              <iframe
                src={item.vid}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="object-fill "
              ></iframe>
            </div>
          ) : null}
        </div>
      </div>
      );
    </div>
  );
};

export default DetailsCard;
