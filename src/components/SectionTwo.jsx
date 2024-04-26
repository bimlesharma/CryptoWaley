import React from "react";

import BrandIcon from "./BrandIcon"; // Assuming BrandIcon component is properly imported
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function SectionTwo() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed:2000,
    cssEase: "linear"
  };
  return (
    <div className="m-auto w-full h-auto bg-blue-950">
      <Slider {...settings} className="flex items-center p-2 pt-3">
        <div>
          <BrandIcon key={1} icon={b1} height="h-12" />
        </div>
        <div>
          <BrandIcon key={2} icon={b2} height="h-12" />
        </div>
        <div>
          <BrandIcon key={3} icon={b3} height="h-12" />
        </div>
        <div>
          <BrandIcon key={4} icon={b4} height="h-12" />
        </div>
        <div>
          <BrandIcon key={5} icon={b5} height="h-12" />
        </div>
        <div>
          <BrandIcon key={6} icon={b6} height="h-12" />
        </div>
        <div>
          <BrandIcon key={7} icon={b7} height="h-12" />
        </div>
        <div>
          <BrandIcon key={8} icon={b8} height="h-12" />
        </div>
        <div>
          <BrandIcon key={9} icon={b9} height="h-12" />
        </div>
        <div>
          <BrandIcon key={10} icon={b10} height="h-12" />
        </div>
        <div>
          <BrandIcon key={11} icon={b11} height="h-12" />
        </div>
        <div>
          <BrandIcon key={12} icon={b12} height="h-12" />
        </div>
        <div>
          <BrandIcon key={13} icon={b13} height="h-12" />
        </div>
        <div>
          <BrandIcon key={14} icon={b14} height="h-12" />
        </div>
      </Slider>
    </div>
  );
}

export default SectionTwo;