import React from "react";
import BrandIcon from "./BrandIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import all brand logos into a single array — add/remove logos here
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

const SLIDER_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  easing: "ease-in-out",
};

function SectionTwo() {
  return (
    <div className="m-auto w-full h-auto bg-blue-950">
      <Slider {...SLIDER_SETTINGS} className="flex items-center p-2 pt-3">
        {BRAND_LOGOS.map((logo, index) => (
          <div key={index}>
            <BrandIcon icon={logo} height="h-12" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SectionTwo;