import React from "react";
import CW from "../assets/CW.png";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" bg-white text-black">
        <div className="top flex justify-between mx-32 pt-20 text-sm">
          <div className="left">
            <img src={CW} alt="" className="h-14 mt-5" />
            <div className="details my-10">
              <div className="address">
                <h3 className="font-bold">Address:</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="contact">
                <h3 className="font-bold">Contact:</h3>
                <p className="underline">+91 1234567899</p>
                <p className="underline">random@gmail.com</p>
              </div>
            </div>
            <div className="socials flex mb-14">
              <FaFacebookF className="mr-4 size-6" />
              <FaInstagram className="mr-4 size-6" />
              <FaTwitter className="mr-4 size-6" />
              <FaLinkedin className="mr-4 size-6" />
              <FaYoutube className="mr-4 size-6" />
            </div>
          </div>
          <div className="right flex">
            <div className="mx-12">
              <ul>
                <li className="my-3">
                  <a href="#">Home</a>
                </li>
                <li className="my-3">
                  <a href="#">About</a>
                </li>
                <li className="my-3">
                  <a href="#">Services</a>
                </li>
                <li className="my-3">
                  <a href="#">Portfolio</a>
                </li>
                <li className="my-3">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="mx-12">
            <ul>
                <li className="my-3">
                  <a href="#">Home</a>
                </li>
                <li className="my-3">
                  <a href="#">About</a>
                </li>
                <li className="my-3">
                  <a href="#">Services</a>
                </li>
                <li className="my-3">
                  <a href="#">Portfolio</a>
                </li>
                <li className="my-3">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="mx-12">
            <ul>
                <li className="my-3">
                  <a href="#">Home</a>
                </li>
                <li className="my-3">
                  <a href="#">About</a>
                </li>
                <li className="my-3">
                  <a href="#">Services</a>
                </li>
                <li className="my-3">
                  <a href="#">Portfolio</a>
                </li>
                <li className="my-3">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom flex justify-between mx-32 pb-20">
            <p className="mr-1">© 2024 CryptoWaley</p>
            <p className="mr-1">Designed by <span><a href="https://github.com/bimlesharma/" className="underline">Bimlesh</a></span> - Powered by <span>ReactJs</span></p>
            <ul className="flex text-sm">
                <li className="mr-5 underline">Privacy Policy</li>
                <li className="mr-5 underline">Terms of Service</li>
                <li className="mr-5 underline">Cookies Settings</li>
            </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
