
import React from "react";
import Button from "./Button";
import cw from "../assets/CW.png";

function Feature({ heading, para0, para1, img }) {
  return (
    <div className="py-10 px-6 md:px-10 lg:px-20 flex flex-col md:flex-row md:justify-center items-center ">
      {/* Left Section */}
      <div className="left w-full md:w-1/2 lg:w-2/3 md:mr-12 mb-8 md:mb-0">
        <div className="md:max-w-2xl ">
          <div className="mb-6 md:mb-10"></div>
          {/* <p className="font-bold text-gray-400 mb-6 md:mb-10 uppercase">services</p> */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none text-grad">
            {heading}
          </h1>
          <div className="text-lg md:text-xl leading-6 my-4 md:my-8" dangerouslySetInnerHTML={{ __html: para0 }} />
          {/* <p className="text-lg md:text-xl leading-6 my-4 md:my-8">{para0}</p> */}
          <a href="https://www.youtube.com/@cryptowaley" target="_blank" className="text-lg md:text-xl text-[#7385ff] underline leading-6 my-4 md:my-8">{para1}</a>
          {/* <Button data="Get Started" /> */}
        </div>
      </div>

      {/* Right Section */}
      <div className=" right md:w-1/2 lg:w-1/3  w-full flex justify-center md:justify-end">
        <div
          className="w-full  sm:w-96 md:w-full rounded-xl h-80 sm:h-96 bg-cover bg-center md:hover:scale-[1.05] hover:shadow-lg transition duration-300 ease-in-out"
          style={{ backgroundImage: ` url(${img})` }}
        >
          {/* <img src={img} alt="feature-img" className="w-full" /> */}
        </div>
      </div>
    </div>
  );
}

export default Feature;
