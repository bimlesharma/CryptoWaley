import React from "react";
import CW from "../assets/CW.png";
import BrandIcon from "./BrandIcon";
import ButtonBlue from "./ButtonBlue";

import logo5 from "../assets/brand-logos/logo5.svg";
import RoundedBox from "./RoundedBox";

const SectionFour = () => {
  return (
    <div className=" px-5 md:px-10 lg:px-20 py-12 main min-h-[10 bg-white text-black">
      <h1 className=" leading-none md:text-[3rem] text-4xl font-bold text-center pb-10">
        Trusted by worldwide largest companies
      </h1>
      <RoundedBox 
        img={CW}
        title={'"We went from 3 to 28 people in just 3 months thanks for the great management of Upcloud."'}
        author={"Richard Oconor"}
        authorDesignation={"Marketing Manager at Intelo"}
        number={"1005+"}
        p={"documents automated across the entire business"}
        data = {"Get Started"}
      />
      {/* brand logo bar */}
      <div className="flex justify-center">
        <div className="brand-bar flex w-[90%]">
          <BrandIcon icon={logo5} height="h-28" />
          <BrandIcon icon={logo5} height="h-28" />
          <BrandIcon icon={logo5} height="h-28" />
          {/* <BrandIcon icon={logo5} height="h-28" /> */}
          <span className="hidden md:contents">
          <BrandIcon icon={logo5} height="h-28" />
          </span>
          <span className="hidden lg:contents">
          <BrandIcon icon={logo5} height="h-28" />
          </span>
          <span className="hidden xl:contents">
          <BrandIcon icon={logo5} height="h-28" />
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
