import React from "react";

import BrandIcon from "./BrandIcon";
import ButtonBlue from "./ButtonBlue";
import CW from "../assets/CW.png";

const RoundedBox = ({img, title, author, authorDesignation, number, p, data }) => {
  return (
    <>
      <div className="box flex border rounded-[1.8rem] border-gray-300 h-[58vh] bg-[#F6F7F7] mt-10 mx-[8rem]">
        <div className="inner-left bg-white w-[70%] h-full rounded-l-[1.8rem] rounded-br-[80px] grid">
          <div className="bg-gray-30 py-5 mx-8">
            <BrandIcon icon={img} height={"h-[80px] -mx-12"} />
          </div>
          <div className="bg-gray-30 py-5 mx-8 ">
            <h1 className="text-4xl">
              {title}
            </h1>
          </div>
          <div className="bg-gray-30 pt-5 mx-8 text-xl">
            <p>
              <b>{author}</b>
              <br />
              {authorDesignation}
            </p>
          </div>
        </div>
        {/* right section */}
        <div className="inner-right h-full grid w-[30%]">
          <div className="bg-gray-30 text-4xl font-bold pt-20 mx-8">{number}</div>
          <div className="bg-gray-30 pb-24 mx-8 ">
            <h1 className="text-xl">
              {p}
            </h1>
          </div>
          <div className="bg-gray-30 pt-10 mb-5 mx-8 text-xl">
            <ButtonBlue data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoundedBox;
