import React from "react";
import CW from "../assets/CW.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 md:py-16 px-5 md:px-10 lg:px-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Section */}
          <div className="left">
            <img src={CW} alt="Company Logo" className="h-12 md:h-14 mt-5" />
            <div className="details my-8">
              <div className="address">
                {/* <h3 className="font-bold text-md md:text-lg">Address:</h3> */}
                {/* <p className="text-md md:text-lg">Lorem ipsum dolor sit amet.</p> */}
              </div>
              <div className="contact mt-4">
                <h3 className="font-bold text-md md:text-lg">Contact:</h3>
                {/* <p className="text-md md:text-lg underline">+91 1234567899</p> */}
                <p className="text-md md:text-lg underline">
                  cryptowaleyofficial@gmail.com
                </p>
              </div>
            </div>
            <div className="socials flex mt-4 md:mt-6">
              {/* <a href="https://www.linkedin.com/company/cryptowaley/">
                <FaFacebookF className="mr-4 size-6 md:size-7" />
              </a> */}
              <a href="https://www.instagram.com/cryptowaley_" target="_blank">
              <FaInstagram className="mr-4 size-6 md:size-7" />
              </a>
              <a href="https://twitter.com/cryptowaley/" target="_blank">
              <FaTwitter className="mr-4 size-6 md:size-7" />
              </a>
              <a href="https://www.linkedin.com/company/cryptowaley/" target="_blank">
              <FaLinkedin className="mr-4 size-6 md:size-7" />
              </a>
              <a href="http://www.youtube.com/@cryptowaley/" target="_blank">
              <FaYoutube className="mr-4 size-6 md:size-7" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="right flex flex-co md:flex-row justify-between">
            {/* Menu Columns */}
            <div className="mx- md:mx-0">
              {/* <h4 className="font-semibold text-xs md:text-sm mb-4">Quick Links</h4> */}
              <ul className="text-md md:text-lg">
                <li className="my-2">
                  <a href="#">Home</a>
                </li>
                <li className="my-2">
                  <a href="#">About</a>
                </li>
                <li className="my-2">
                  <a href="#">Services</a>
                </li>
                <li className="my-2">
                  <a href="#">Portfolio</a>
                </li>
                <li className="my-2">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="mx- md:mx-0">
              {/* <h4 className="font-semibold text-xs md:text-sm mb-4">Account</h4> */}
              <ul className="text-md md:text-lg">
                <li className="my-2">
                  <a href="#">Features</a>
                </li>
                <li className="my-2">
                  <a href="#">Sign In</a>
                </li>
                <li className="my-2">
                  <a href="#">Sign Up</a>
                </li>
              </ul>
            </div>
            <div className="mx- md:mx-0">
              {/* <h4 className="font-semibold text-xs md:text-sm mb-4">Resources</h4> */}
              <ul className="text-md md:text-lg">
                <li className="my-2">
                  <a href="#">Style Guide</a>
                </li>
                <li className="my-2">
                  <a href="#">Changelog</a>
                </li>
                <li className="my-2">
                  <a href="#">Licenses</a>
                </li>
                <li className="my-2">
                  <a href="#">More Templates</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-2 text-sm md:text-md">
          <p>© 2024 CryptoWaley</p>
          <p>
            Developed by{" "}
            <a
              href="https://github.com/bimlesharma/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bimlesh
            </a>{" "}
            - Using ReactJs
          </p>
          <ul className="flex text-xs">
            <li className="mr-3 underline">Privacy Policy</li>
            <li className="mr-3 underline">Terms of Service</li>
            <li className="underline">Cookies Settings</li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
