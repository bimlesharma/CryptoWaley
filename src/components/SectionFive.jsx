import React from "react";
import BrandIcon from "./BrandIcon";
import performer from "../assets/performer.png";

const SectionFive = () => {
  return (
    <>
      <div className="main bg-white text-black min-h-[90vh] flex justify-center items-center gap-16">
        <div className="left w-[40%] ">
          <h1 className="text-4xl w-[70%] font-bold">
            An award-winning media intelligence solution
          </h1>
          <p className=" text-md my-5">
            Confirmed as a high-performing product by customers and tech experts
            in various industries.
          </p>
          <div className="images flex justify-start -ml-10 w-full h-auto mt-10">
            <div className="-mr-16">
              <BrandIcon icon={performer} height={"h-32"} />
            </div>
            <div className="-mr-16">
              <BrandIcon icon={performer} height={"h-32"} />
            </div>
            <div className="-mr-16">
              <BrandIcon icon={performer} height={"h-32"} />
            </div>
          </div>
        </div>
        <div className="right w-[40%] grid grid-rows-2 grid-cols-2 gap-5 gap-y-20 text-end justify-items-end">
          <div className="stats w-[70%]">
            <h1 className="text-6xl font-bold">#1</h1>
            <p className=" text-sm my-5">
              top leader in worlwide SaaS industry
            </p>
          </div>
          <div className="stats w-[70%]">
            <h1 className="text-6xl font-bold">12</h1>
            <p className=" text-sm my-5">years of experience in the business</p>
          </div>
          <div className="stats w-[70%]">
            <h1 className="text-6xl font-bold">14</h1>
            <p className=" text-sm my-5">
              top leader in worlwide SaaS industry
            </p>
          </div>
          <div className="stats w-[70%]">
            <h1 className="text-6xl font-bold">4.9/5</h1>
            <p className=" text-sm my-5">average rating review score</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFive;
