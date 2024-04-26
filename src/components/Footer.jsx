import React from "react";
import CW from "../assets/CW.png";

import NavButton from "./NavButton";
import { FaWhatsapp } from "react-icons/fa";


import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black text-white py-8 md:py-14 px-5 md:px-10 lg:px-10"
    >
      {/* <hr /> */}
      <div className="container mx-auto  sm:px-6 flex flex-col md:flex-row justify-between items-center">

          <div className="left mt-10 md:mt-0">
            <img src={CW} alt="Company Logo" className="h-40 bg-white" />
          </div>

          <div className="mid">
            <div className="details mb-8">
              <div className="contact mt-4">
                <h3 className="font-bold text-md md:text-lg text-center md:text-left">Contact:</h3>
                <a
                  href="mailto:cryptowaleyofficial@gmail.com"
                  type="email"
                  className="text-md md:text-lg underline"
                >
                  cryptowaleyofficial@gmail.com
                </a>
              </div>
            </div>
            <div className="socials flex items-center justify-center">
              <a href="https://chat.whatsapp.com/IUOl4OKTu5U0x0iFuyirY7" target="_blank">
                <FaWhatsapp className="mr-4 size-6 md:size-7 hover:text-[#25D366]" />
              </a>
              <a href="https://www.instagram.com/cryptowaley_" target="_blank">
                <FaInstagram className="mr-4 size-6 md:size-7 hover:text-[#cd486b]" />
              </a>
              <a href="https://twitter.com/cryptowaley" target="_blank">
                <FaXTwitter  className="mr-4 size-6 md:size-7 hover:text-gray-600" />
              </a>
              <a
                href="https://www.linkedin.com/company/cryptowaley/"
                target="_blank"
              >
                <FaLinkedin className="mr-4 size-6 md:size-7 hover:text-[#0077b5]" />
              </a>
              <a href="http://www.youtube.com/@cryptowaley/" target="_blank">
                <FaYoutube className="mr-4 size-6 md:size-7 hover:text-[#FF0000]" />
              </a>
            </div>
          </div>

          <div className="right mt-3 ">
            <div className="text-black py-4 text-right text-lg">
              <li className="text-center md:text-right">
                <NavButton data="Features" id="features" />
              </li>
              <li className="text-center md:text-right">
                <NavButton data="About us" id="about" />
              </li>
              <li className="text-center md:text-right">
                <NavButton data="Testimonial" id="testimonial" />
              </li>
              <li className="text-center md:text-right">
                <NavButton data="Stats" id="stats" />
              </li>
              <li className="text-center md:text-right">
                <NavButton data="Team" id="team" />
              </li>
              <li className="text-center md:text-right">
                <NavButton data="Contact" id="footer" />
              </li>
            </div>
          </div>

      </div>
    </footer>
  );
};

export default Footer;
