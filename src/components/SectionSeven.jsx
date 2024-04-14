import React from "react";
import CW from "../assets/CW.png";
import ButtonBlue from "./ButtonBlue";

function SectionSeven() {
  return (
    <div className="my-12 px-5 md:px-10 lg:px-20">
      {/* Section Title */}
      <div className="flex justify-center text-center lg:text-5xl md:text-4xl text-3xl mb-5 lg:my-12 font-medium tracking-wider">
        <h1>Our Unique Features</h1>
      </div>

      {/* Feature Images */}
      <div className="flex justify-center flex-wrap gap-4 md:gap-8 lg:gap-12 mb-5 lg:mb-12">
        <img src={CW} alt="Feature Image" className=" h-60 md:h-80 lg:h-[18rem] px-5" />
        <img src={CW} alt="Feature Image" className=" h-60 md:h-80 lg:h-[18rem] px-5" />
        <img src={CW} alt="Feature Image" className=" h-60 md:h-80 lg:h-[18rem] px-5" />
      </div>

      {/* Section Subtitle */}
      <div className="flex justify-center text-4xl lg:text-5xl mt-12 lg:mt-0 mb-12 lg:mb-12 font-medium tracking-wider">
        <h1 className="w-3/4 lg:w-2/4 text-center leading-tight">
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
