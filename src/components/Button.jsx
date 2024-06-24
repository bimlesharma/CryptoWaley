import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import bulearrow from "../assets/bluearrow.svg";


const Button = (props) => {
  return (
    <button
      className=" text-white p-3 pl-7  flex items-center gap-4 cursor-pointer rounded-full p bg-[rgba(222,222,222,0.2)]"
      onClick={handleClickScroll}
    >
      {props.data}
      {/* <FaCircleArrowRight className=" size-9" /> */}
        <img src={bulearrow} alt="" className=" size-10" />
    </button>
  );
};

export default Button;
