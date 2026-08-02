import React from "react";
import { useNavigate } from "react-router-dom";

const NavButton = ({ data, id, onNavigate }) => {
  const navigate = useNavigate();

  const handleClickScroll = () => {
    if (id === "home") {
      navigate("/");
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "blog") {
      navigate("/blog");
    } else if (id === "pricing") {
      navigate("/pricing");
    } else {
      navigate("/", { state: { scrollToId: id } });
    }

    // Notify parent (e.g. mobile Navbar) so it can close the menu
    if (onNavigate) onNavigate();
  };

  return (
    <button
      className="hover:text-white font-sans font-normal text-white lg:text-gray-200 text-lg cursor-pointer"
      onClick={handleClickScroll}
    >
      {data}
    </button>
  );
};

export default NavButton;
