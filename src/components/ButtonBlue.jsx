import React from "react";
import blackarrow from "../assets/blackarrow.svg";


const ButtonBlue = (props) => {
  return (
    <div
      className=" text-white p-3 pl-7  flex items-center gap-4 cursor-pointer rounded-full bg-[#3956f1]"
      onClick={URL}
    >
      {props.data}
      {/* <FaCircleArrowRight className=" size-9" /> */}
        <img src={blackarrow} alt="" className=" size-10" />
    </div>
  );
};

export default ButtonBlue;
