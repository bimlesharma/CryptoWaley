// import cw from "../assets/CW.png";
// import Button from "./Button";
// import { MdShoppingCart } from "react-icons/md";
// import { RiUser6Line } from "react-icons/ri";



// function Navbar() {
//   return (
//     <div className="text-white font-bold bg-transparent flex justify-center h-[10vh] bg-gradient-to-r from-black via-black  to-[rgba(47,40,255,0.5)] bg-black">
//       <div className="left">
//         <a href="#" className="h-full">
//           <img src={cw} alt="" className="h-full" />
//         </a>
//       </div>
//       <div className="mid p-2 ml-10 flex items-center justify-start mr-[25vw] h-full ">
//         <a href="/" className="mr-6">
//           Featues
//         </a>
//         <a href="/" className="mr-6">
//           About us
//         </a>
//         <a href="/" className="mr-6">
//           Pricing
//         </a>
//         <a href="/" className="mr-6">
//           Blog
//         </a>
//         <a href="/" className="mr-6">
//           Contact
//         </a>
//       </div>
//       <div className="right bg- flex gap-2 justify-end items-center text-center content-center">
//         <div className="bg-black rounded-full size-12 flex justify-center items-center"><MdShoppingCart className=" size-6"/></div>
//         <div className="bg-black rounded-full size-14 flex justify-center items-center"><RiUser6Line className=" size-6 items-center"/></div>

//         <Button 
//         data="Get started" />
//       </div>
//     </div>
//   );
// }

// export default Navbar;















// import React from "react";
// import cw from "../assets/CW.png";
// import Button from "./Button";
// import { MdShoppingCart } from "react-icons/md";
// import { RiUser6Line } from "react-icons/ri";

// function Navbar() {
//   return (
//     <div className="text-white font-bold bg-gradient-to-r from-black via-black to-[rgba(47,40,255,0.5)] shadow-md">
//       <div className="container mx-auto flex items-center justify-between px-4 py-2">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <a href="#">
//             <img src={cw} alt="" className="h-12" />
//           </a>
//         </div>
        
//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center justify-center space-x-6 flex-grow">
//           <a href="/" className="nav-link">
//             Features
//           </a>
//           <a href="/" className="nav-link">
//             About Us
//           </a>
//           <a href="/" className="nav-link">
//             Pricing
//           </a>
//           <a href="/" className="nav-link">
//             Blog
//           </a>
//           <a href="/" className="nav-link">
//             Contact
//           </a>
//         </div>
        
//         {/* Icons and Button */}
//         <div className="flex items-center space-x-4">
//           <div className="bg-black rounded-full p-2">
//             <MdShoppingCart className="text-white" size={24} />
//           </div>
//           <div className="bg-black rounded-full p-2">
//             <RiUser6Line className="text-white" size={24} />
//           </div>
//           <Button data="Get Started" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;











// import React, { useState } from "react";
// import cw from "../assets/CW.png";
// import Button from "./Button";
// import { MdShoppingCart } from "react-icons/md";
// import { RiUser6Line } from "react-icons/ri";
// import { FaBars, FaTimes } from "react-icons/fa";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="text-white font-bold bg-transparent flex justify-center h-[10vh] bg-gradient-to-r from-black via-black to-[rgba(47,40,255,0.5)] bg-black">
//       <div className="left">
//         <a href="#" className="h-full">
//           <img src={cw} alt="" className="h-full" />
//         </a>
//       </div>

//       {/* Hamburger Icon for Mobile */}
//       <div className="block md:hidden absolute right-4 top-4">
//         <button onClick={toggleMenu}>
//           {isOpen ? (
//             <FaTimes className="text-white text-xl" />
//           ) : (
//             <FaBars className="text-white text-xl" />
//           )}
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } md:flex mid p-2 ml-10 flex items-center justify-start mr-[25vw] h-full`}
//       >
//         <a href="/" className="mr-6">
//           Features
//         </a>
//         <a href="/" className="mr-6">
//           About us
//         </a>
//         <a href="/" className="mr-6">
//           Pricing
//         </a>
//         <a href="/" className="mr-6">
//           Blog
//         </a>
//         <a href="/" className="mr-6">
//           Contact
//         </a>
//       </div>

//       {/* Right Section */}
//       <div className="right bg- flex gap-2 justify-end items-center text-center content-center">
//         <div className="bg-black rounded-full size-12 flex justify-center items-center">
//           <MdShoppingCart className="size-6" />
//         </div>
//         <div className="bg-black rounded-full size-14 flex justify-center items-center">
//           <RiUser6Line className="size-6 items-center" />
//         </div>
//         <Button data="Get started" />
//       </div>
//     </div>
//   );
// }

// export default Navbar;



















import React, { useState } from "react";
import cw from "../assets/CW.png";
import Button from "./Button";
import { MdShoppingCart } from "react-icons/md";
import { RiUser6Line } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white absolute w-full font-bold bg-transparent flex justify-between items-center h-[10vh] px-6 md:px-10 lg:px-20">
      <div className="left">
        <a href="#" className="h-12">
          <img src={cw} alt="" className="h-12" />
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
      <div className="hidden md:flex justify-center items-center space-x-6">
        <a href="/" className="hover:text-gray-300">
          Features
        </a>
        <a href="/" className="hover:text-gray-300">
          About us
        </a>
        <a href="/" className="hover:text-gray-300">
          Pricing
        </a>
        <a href="/" className="hover:text-gray-300">
          Blog
        </a>
        <a href="/" className="hover:text-gray-300">
          Contact
        </a>
        
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute flex justify-end -ml-6 top-[10vh] w-full h-screen  p-5 text-white z-20 transition-opacity duration-300 opacity-100 bg-gradient-to-r from-[rgba(0,0,0,.3)] via-[rgba(0,0,0,0.8)]  to-[#181481]">
          <ul className="text-cente py-4 text-right text-xl mr-0 mt-5">
            <li>
              <a href="/" className="block py-5 hover:text-gray-300">
                Features
              </a>
            </li>
            <li>
              <a href="/" className="block py-5 hover:text-gray-300">
                About us
              </a>
            </li>
            <li>
              <a href="/" className="block py-5 hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="block py-5 hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="block py-5 hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="block py-5 hover:text-gray-300">
                Cart
              </a>
            </li>
            <li>
              <a href="/" className="block py-5 hover:text-gray-300">
                Login
              </a>
            </li>
            <li>
              <a href="/" className="block py-5 hover:text-gray-300">
                Get started
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Right Section */}
      <div className="hidden md:flex gap-2 items-center">
        <div className="bg-black rounded-full size-12 flex justify-center items-center">
          <MdShoppingCart className="size-6" />
        </div>
        <div className="bg-black rounded-full size-14 flex justify-center items-center">
          <RiUser6Line className="size-6 items-center" />
        </div>
        <Button data="Get started" />
      </div>
    </div>
  );
}

export default Navbar;
