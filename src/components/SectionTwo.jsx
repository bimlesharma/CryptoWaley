import React from "react";
import Marquee from "react-fast-marquee";

// Import all brand logos
import b1 from "../assets/brand-logos/1.png";
import b2 from "../assets/brand-logos/2.png";
import b3 from "../assets/brand-logos/3.png";
import b4 from "../assets/brand-logos/4.png";
import b5 from "../assets/brand-logos/5.png";
import b6 from "../assets/brand-logos/6.png";
import b7 from "../assets/brand-logos/7.png";
import b8 from "../assets/brand-logos/8.png";
import b9 from "../assets/brand-logos/9.png";
import b10 from "../assets/brand-logos/10.png";
import b11 from "../assets/brand-logos/11.png";
import b12 from "../assets/brand-logos/12.png";
import b13 from "../assets/brand-logos/13.png";
import b14 from "../assets/brand-logos/14.png";

const BRAND_LOGOS = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14];

function SectionTwo() {
  return (
    <div className="w-full bg-black py-8 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8">
          Trusted by top Web3 brands
        </p>
        
        <Marquee 
          speed={80} 
          gradient={true} 
          gradientColor="#000000" 
          gradientWidth={100}
          pauseOnHover={true}
          autoFill={true} // Guarantees infinite loop even on ultra-wide screens
        >
          {BRAND_LOGOS.map((logo, index) => (
            <div 
              key={index} 
              className="mx-8 md:mx-12 flex justify-center items-center"
            >
              <img 
                src={logo} 
                alt={`Brand logo`} 
                className="h-6 md:h-8 w-auto object-contain cursor-pointer"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default SectionTwo;