import Images from "./GalleryImages";

const GalleryPage = (props) => {
  console.log(props.item);
  return (
    <div className=" h-full bg-white">
      <h1 className="text-9xl text-black"> looking for {props.item}</h1>
      <div>
        { return !props.item <div>Find Something </div> :
      pro

        }

        }
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
