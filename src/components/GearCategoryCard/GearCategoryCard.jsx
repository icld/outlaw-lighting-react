import { NavLink } from "react-router-dom";

const GearCategoryCard = ({ name, image, url }) => {
  return (
    <NavLink to={url}>
      <div className="prose prose-lg group w-11/12 h-80 m-auto rounded-xl bg-white relative transition-all duration-300 ring-4 ring-blue-500 justify-center ">
        <h2 className="hover:opacity-100 absolute "> {name}</h2>
        <div className="flex w-full h-full cursor-pointer group-hover:opacity-30 shadow-2xl transition-all duration-300 overflow-hidden ">
          <img
            src={image}
            alt="lighting fixture"
            className="mx-auto pt-4 object-contain"
          />
        </div>
        <div className="opacity-0 text-white shadow-lg bg-green-500 absolute m-auto group-hover:opacity-100 text-center p-2 rounded-lg transition-all duration-300 border border-gray-600">
          View Inventory
        </div>
      </div>
    </NavLink>
  );
};

export default GearCategoryCard;
