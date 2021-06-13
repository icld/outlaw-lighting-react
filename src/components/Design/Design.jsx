import React from "react";
import designData from "./DesignData";

const Design = () => {
  return (
    <div className="bg-white ">
      <h2 className="text-4xl  text-center pt-12">
        Outlaw Lighting is a Full Service Production Design Shop
      </h2>

      {designData.map((item, index) => (
        <div className="container mt-32 mx-auto p-4 md:p-0">
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            <img
              src={item.img1}
              alt={item.alt}
              className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
            ></img>
            <div className="bg-white w-full md:2/3">
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center  md:text-left">
                    <h3>{item.title}</h3>
                    <p className="mb-0 mt-3  text-gray-400 text-sm italic">
                      {item.subTitle}
                    </p>
                    <hr className="w-1/4 md:ml-0 mt-4 border lg:hidden" />
                  </div>
                  <div className="w-full lg:w-3/5 lg:px-3">
                    <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                      {item.body}
                    </p>
                  </div>
                  <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                    <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                      {item.button}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Design;
