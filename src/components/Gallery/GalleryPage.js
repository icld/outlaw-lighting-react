import Images from "./GalleryImages";
const images = Images;

const GalleryPage = (props) => {
  console.log(props.item, images);
  return (
    <div className=" h-full  bg-white flex flex-col m-auto">
      {/* <h1 className="text-9xl text-black"> looking for {props.item}</h1> */}
      <div className="w-4/5 h-full flex flex-wrap m-auto">
        {!props.item ? (
          <h1>Find Something</h1>
        ) : (
          images.map((image) =>
            image.type === props.item ? (
              <div className="border rounded-xl m-auto w-full h-auto mt-6 overflow-hidden flex relative">
                <img
                  src={image.img}
                  alt={image.type}
                  key={image.id}
                  className="m-auto w-full h-auto object-contain"
                />
                <div className="absolute text-black  bg-gradient-to-br from-white md:text-2xl  to-transparent  px-8 md:px-20 py-1 md:py-4">
                  {image.text}
                </div>
              </div>
            ) : null
          )
        )}
        {/* {Images.concert.map((category) => {
          return console.log(category.img);
          // if (category === props.item) {
          //   return category.map((image) => {
          //     return (
          //       <div>
          //         <img src={image.img} alt="concert" key={image.id} />
          //       </div>
          //     );
          //   });
          // } else {
          //   return null;
          // }
        })} */}
      </div>
    </div>
  );
};

export default GalleryPage;
