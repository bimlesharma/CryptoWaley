import React from "react";
import CW from "../assets/CW.png";
import ButtonBlue from "./ButtonBlue";

function SectionSeven() {
  return (
    <>
      <div className=" flex justify-center text-[2.7rem] my-[10vh]  font-medium tracking-wider	">
        <h1>Our unique features</h1>
      </div>
      <div className="flex justify-center  w-full mt-0">
        <img src={CW} alt="" className="h-80 px-5" />
        <img src={CW} alt="" className="h-80 px-5" />
        <img src={CW} alt="" className="h-80 px-5" />
      </div>
      <div className=" flex justify-center text-[3.5rem] mt-[30vh] mb-[5vh]  font-medium tracking-wider	">
        <h1 className="w-[40%] text-center leading-none	">
          Take your startup to the next level
        </h1>
      </div>
      <div className="flex justify-center mb-[20vh]">
        <ButtonBlue data="Get started" />
      </div>
    </>
  );
}

export default SectionSeven;
