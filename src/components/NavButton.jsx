


import React from "react";
import { useNavigate } from "react-router-dom";

const NavButton = (props) => {
  const navigate = useNavigate();

  const handleClickScroll = () => {
    if (props.id === "home") {
      navigate("/");
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    } else if (props.id === "blog") {
      navigate("/blog");
    } else if (props.id === "pricing") {
      navigate("/pricing");
    } else {
      navigate("/", { state: { scrollToId: props.id } });
    }
  };
  

  return (
    <button
      className="hover:text-white font-sans font-normal text-white lg:text-gray-200 text-lg cursor-pointer"
      onClick={handleClickScroll}
    >
      {props.data}
    </button>
  );
};

export default NavButton;
