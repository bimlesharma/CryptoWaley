import React, { useState } from "react";
import cw from "../assets/CW.png";
import cwlogo from "/assets/img/logo.png";
import Button from "./Button";
import { MdShoppingCart } from "react-icons/md";
import { RiUser6Line } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import NavButton from "./NavButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white absolute w-full font-bold bg-transparent flex justify-between items-center h-[10vh] px-6 md:px-10 lg:px-20">
      <div className="left">
        <a href="/" className="h-12">
          <img src={cwlogo} alt="" className="h-16" />
        </a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-white text-xl">
          {isOpen ? (
            <FaTimes className="transition duration-300 transform rotate-45" />
          ) : (
            <FaBars className="transition duration-300" />
          )}
        </button>
      </div>

      {/* Normal Menu for Larger Screens */}
      <div className="hidden md:flex justify-center items-center space-x-5">
        <NavButton data="Home" id="home" />
        <NavButton data="Features" id="features" />
        <NavButton data="About us" id="about" />
        <NavButton data="Testimonial" id="testimonial" />
        <NavButton data="Stats" id="stats" />
        <NavButton data="Team" id="team" />
        <NavButton data="Contact" id="footer" />
        <NavButton data="Blogs" id="blog" />
        <NavButton data="Pricing" id="pricing" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute flex justify-end -ml-6 top-[10vh] w-full h-screen  p-5 text-white z-20 transition-opacity duration-300 opacity-100 bg-gradient-to-r from-[rgba(0,0,0,.3)] via-[rgba(0,0,0,0.8)]  to-[#181481]">
          <ul className="text-cente py-4 text-right text-xl mr-0 mt-5">
            <li className="block py-3 text-white">
              <NavButton data="Home" id="home" />
            </li>
            <li className="block py-3 text-white">
              <NavButton data="Features" id="features" />
            </li>
            <li className="block py-3 text-white">
              <NavButton data="About us" id="about" />
            </li>
            <li className="block py-3 text-white">
              <NavButton data="Testimonial" id="testimonial" />
            </li>
            <li className="block py-3 text-white">
              <NavButton data="Stats" id="stats" />
            </li>
            <li className="block py-3 text-white">
              <NavButton data="Team" id="team" />
            </li>
            <li className="block py-3 text-white">
              <NavButton data="Contact" id="footer" />
            </li>
            <li className="block py-3 text-white">
              <NavButton data="Blogs" id="blog" />
            </li>
            <li className="block py-3 text-white">
              <NavButton data="Pricing" id="pricing" />
            </li>
            
          </ul>
        </div>
      )}

      {/* Right Section */}
      {/* <div className="hidden md:flex gap-2 items-center">
        <div className="bg-black rounded-full size-12 flex justify-center items-center">
          <MdShoppingCart className="size-6" />
        </div>
        <div className="bg-black rounded-full size-14 flex justify-center items-center">
          <RiUser6Line className="size-6 items-center" />
        </div>
        <Button data="Get started" />
      </div> */}
    </div>
  );
}

export default Navbar;
