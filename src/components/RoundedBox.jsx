import React from "react";
import BrandIcon from "./BrandIcon";
import ButtonBlue from "./ButtonBlue";

const RoundedBox = ({ img, title, author, authorDesignation, number, p, data }) => {
  return (
    <div className="box flex md:flex-row flex-col border rounded-[1.8rem] border-gray-300 bg-gray-100 ">
      {/* Left Section */}
      <div className="inner-left bg-white w-full sm:w-3/4 p-8 rounded-[1.8rem] lg:rounded-tr-0 rounded-br-[80px]">
        <div className="flex items-center justify-center md:justify-start mb-6 -ml-5">
          <BrandIcon icon={img} height="h-16 sm:h-20 md:h-24" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <div className="text-lg mb-4">
          <p>
            <b>{author}</b>
            <br />
            {authorDesignation}
          </p>
        </div>
        
      </div>

      {/* Right Section */}
      <div className="inner-right  bg-gray-100 rounded-r-[1.8rem] p-8 flex flex-col justify-center items-center">
        <div className="text-4xl font-bold mb-6">{number}</div>
        <div className="text-lg mb-6">{p}</div>
        <div className="mb-6">
          <ButtonBlue data={data} />
        </div>
      </div>
    </div>
  );
};

export default RoundedBox;
