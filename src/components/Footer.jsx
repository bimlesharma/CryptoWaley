import React from "react";
import cwlogo from "/assets/img/logo.png";
import NavButton from "./NavButton";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white pt-20 pb-10 px-6 md:px-12 lg:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

        {/* Column 1: Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={cwlogo} alt="CryptoWaley Logo" className="h-24 mb-6 object-contain" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Empowering the Crypto Community with Insights & Innovation. Your gateway to the vibrant world of Web3 and digital finance.
          </p>
        </div>

        {/* Column 2: Explore (Links) */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Explore</h4>
          <ul className="flex flex-col gap-4 items-center md:items-start text-gray-400">
            <li><NavButton data="Features" id="features" /></li>
            <li><NavButton data="About us" id="about" /></li>
            <li><NavButton data="Testimonial" id="testimonial" /></li>
            <li><NavButton data="Stats" id="stats" /></li>
          </ul>
        </div>

        {/* Column 3: Company (Links) */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Company</h4>
          <ul className="flex flex-col gap-4 items-center md:items-start text-gray-400">
            <li><NavButton data="Team" id="team" /></li>
            <li><NavButton data="Blog" id="blog" /></li>
            <li><NavButton data="Pricing" id="pricing" /></li>
            <li>
              <a
                href="https://drive.google.com/drive/folders/1-HnyxFaT35uuyeGgHiC8zhJjiI2-FmaI"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                Media Kit
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Connect With Us</h4>
          <a
            href="mailto:cryptowaleyofficial@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 font-medium"
          >
            cryptowaleyofficial@gmail.com
          </a>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://chat.whatsapp.com/IUOl4OKTu5U0x0iFuyirY7"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white text-gray-400 hover:shadow-[0_0_15px_rgba(37,211,102,0.5)] transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-lg" />
            </a>
            <a
              href="https://www.instagram.com/cryptowaley_"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#cd486b] hover:text-white text-gray-400 hover:shadow-[0_0_15px_rgba(205,72,107,0.5)] transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="https://twitter.com/cryptowaley"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gray-100 hover:text-black text-gray-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300"
              aria-label="Twitter"
            >
              <FaXTwitter className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/cryptowaley/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white text-gray-400 hover:shadow-[0_0_15px_rgba(0,119,181,0.5)] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="http://www.youtube.com/@cryptowaley/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF0000] hover:text-white text-gray-400 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-300"
              aria-label="YouTube"
            >
              <FaYoutube className="text-lg" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Banner */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} CryptoWaley. All rights reserved.
        </p>
        {/* <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
