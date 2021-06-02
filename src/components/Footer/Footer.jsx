import Logo from "../../assets/full-logo.png";
const Footer = () => {
  return (
    <div>
      <div className="h-80 bg-gray-900 grid grid-cols-3 gap-6 mt-8 text-gray-400">
        <img src={Logo} alt="logo" className="m-auto w-full" />
        <p className="text-2xl m-auto content-center">
          <strong>Outlaw Lighting</strong>
          <br />
          3342 NW 26th Ave Suite 14
          <br /> Portland, OR <br />
          97210
        </p>{" "}
      </div>
    </div>
  );
};

export default Footer;
