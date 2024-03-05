import cw from "../assets/CW.png";
import Button from "./Button";
import { MdShoppingCart } from "react-icons/md";
import { RiUser6Line } from "react-icons/ri";



function Navbar() {
  return (
    <div className="text-white font-bold bg-transparent flex justify-center h-[10vh] bg-gradient-to-r from-black via-black  to-[rgba(47,40,255,0.5)] bg-black">
      <div className="left">
        <a href="#" className="h-full">
          <img src={cw} alt="" className="h-full" />
        </a>
      </div>
      <div className="mid p-2 ml-10 flex items-center justify-start mr-[25vw] h-full ">
        <a href="/" className="mr-6">
          Featues
        </a>
        <a href="/" className="mr-6">
          About us
        </a>
        <a href="/" className="mr-6">
          Pricing
        </a>
        <a href="/" className="mr-6">
          Blog
        </a>
        <a href="/" className="mr-6">
          Contact
        </a>
      </div>
      <div className="right bg- flex gap-2 justify-end items-center text-center content-center">
        <div className="bg-black rounded-full size-12 flex justify-center items-center"><MdShoppingCart className=" size-6"/></div>
        <div className="bg-black rounded-full size-14 flex justify-center items-center"><RiUser6Line className=" size-6 items-center"/></div>

        <Button 
        data="Get started" />
      </div>
    </div>
  );
}

export default Navbar;
