import Images from "./GalleryImages";
const images = Images;

const GalleryPage = (props) => {
  return (
    <div className=" h-full  bg-white flex flex-col m-auto">
      {/* <h1 className="text-9xl text-black"> looking for {props.item}</h1> */}
      <div className="w-3/4 h-full flex flex-wrap m-auto">
        {!props.item ? (
          <h1>Find Something</h1>
        ) : (
          images.map((image) =>
            image.type === props.item ? (
              <div className="border rounded-xl m-auto    w-full h-full mt-6 overflow-hidden flex relative">
                <img
                  src={image.img}
                  alt={image.type}
                  key={image.id + Math.random()}
                  className="m-auto w-full h-auto object-cover"
                />
                <div className="absolute text-black  bg-gradient-to-br  from-white md:text-2xl  to-transparent  px-8 md:px-20 py-1 md:py-4">
                  {image.id}
                </div>
              </div>
            ) : null
          )
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
