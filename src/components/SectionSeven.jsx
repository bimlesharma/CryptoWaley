import React from "react";
import CW from "../assets/CW.png";
import ButtonBlue from "./ButtonBlue";

function SectionSeven() {
  return (
    <div className="py-10 px-5 md:px-10 lg:px-20 min-h-[100vh] flex flex-col justify-center items-center">
      {/* Section Title */}
      <div className="flex justify-center text-center lg:text-5xl md:text-4xl text-3xl my-12 lg:my-14 font-medium tracking-wider">
        <h1>Our Unique Features</h1>
      </div>

      {/* Feature Images */}
      <div className="flex justify-center flex-wrap gap-4 md:gap-8 lg:gap-12 mb-5 lg:mb-12">
        <img src={CW} alt="Feature Image" className=" h-60 md:h-80 lg:h-[18rem] px-5" />
        <img src={CW} alt="Feature Image" className=" h-60 md:h-80 lg:h-[18rem] px-5" />
        <img src={CW} alt="Feature Image" className=" h-60 md:h-80 lg:h-[18rem] px-5" />
      </div>

      {/* Section Subtitle */}
      <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl lg:mt-0 lg:mb-10 mb-5 font-medium tracking-wider">
        <h1 className="w-3/4 lg:w-full text-center leading-tight">
          Take Your Startup to the Next Level
        </h1>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <ButtonBlue data="Get Started" />
      </div>
    </div>
  );
}

export default SectionSeven;
