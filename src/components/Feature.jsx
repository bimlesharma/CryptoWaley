import Button from "./Button";
import ButtonBlue from "./ButtonBlue";
import cw from "../assets/CW.png";

function Feature({ heading, para0, para1, img }) {
  return (
    <div className=" min-h-[80vh] flex justify-center items-center">
      <div className="left  w-[35%] mr-52">
        <p className=" font-bold text-gray-400 mb-10">FEATURE</p>
        <h1 className=" text-[2.5rem] font-bold leading-none text-grad">
          {heading}{" "}
        </h1>
        <p className=" text-xl leading-6 my-8">{para0}</p>
        <p className=" text-xl leading-6 my-8 ">{para1}</p>
        <Button data="Get started" />
      </div>
      <div className="left  w-[35%] ">
        <img src={img} alt="feature-img" />
      </div>
    </div>
  );
}

export default Feature;
