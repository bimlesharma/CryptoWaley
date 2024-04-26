
import React from "react";
import BrandIcon from "./BrandIcon";
import performer from "../assets/performer.png";

const SectionFive = () => {
  return (
    <div className="bg-white text-black py-10 flex flex-col md:flex-row justify-center items-center gap-8 px-6 lg:px-20">
      {/* Left Section */}
      <div className="left md:w-1/2 ">
        <h1 className="text-3xl lg:text-4xl font-bold text-center md:text-left">
          An award-winning media intelligence solution
        </h1>
        <p className="text-md my-5 text-center md:text-left">
          Confirmed as a high-performing product by customers and tech experts
          in various industries.
        </p>
        <div className="flex justify-center md:justify-start ">
          {/* Display BrandIcons */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="mr md">
              <BrandIcon icon={performer} height={"h-32"} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="right w-full px-4 md:px-0 md:w-1/2 grid grid-cols-2 gap-8 text-right">
        {/* Statistics */}
        <div className="stats">
          <h1 className="text-4xl lg:text-6xl font-bold">50+</h1>
          <p className="text-sm my-3">meetups attended</p>
        </div>
        <div className="stats">
          <h1 className="text-4xl lg:text-6xl font-bold">30+</h1>
          <p className="text-sm my-3">media partnerships</p>
        </div>
        <div className="stats">
          <h1 className="text-4xl lg:text-6xl font-bold">125+</h1>
          <p className="text-sm my-3">interviews published</p>
        </div>
        <div className="stats">
          <h1 className="text-4xl lg:text-6xl font-bold">4.9/5</h1>
          <p className="text-sm my-3">average rating review score</p>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
