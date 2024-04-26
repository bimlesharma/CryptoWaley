import React from "react";

const NavButton = (props) => {
  const handleClickScroll = () => {
    const element = document.getElementById(props.id);
    if (props.id === "home") {
      document.documentElement.scroll({ top: 0, behavior: "smooth" });
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      className="hover:text-white font-sans font-normal text-white lg:text-gray-200  text-lg  cursor-pointer "
      onClick={handleClickScroll}
    >
      {props.data}
    </button>
  );
};

export default NavButton;
