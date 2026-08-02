import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * NavButton — used in Footer for navigation links.
 * Handles both scroll-to-section (home page) and route navigation.
 *
 * Props:
 *  - data       {string}   Link label text
 *  - id         {string}   Section ID (for scroll) or route key (blog, pricing, home)
 *  - onNavigate {function} Optional callback after navigation (e.g. close mobile menu)
 */
const NavButton = ({ data, id, onNavigate }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id === "home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "blog") {
      navigate("/blog");
    } else if (id === "pricing") {
      navigate("/pricing");
    } else {
      // Scroll to a section on the home page
      navigate("/", { state: { scrollToId: id } });
    }

    if (onNavigate) onNavigate();
  };

  return (
    <button
      onClick={handleClick}
      className="text-gray-300 hover:text-white text-base font-normal transition-colors duration-200 cursor-pointer"
    >
      {data}
    </button>
  );
};

export default NavButton;
