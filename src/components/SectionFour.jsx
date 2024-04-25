// import React from "react";
// import CW from "../assets/CW.png";
// import BrandIcon from "./BrandIcon";
// import ButtonBlue from "./ButtonBlue";

// import logo5 from "../assets/brand-logos/logo5.svg";
// import intro from "/assets/intro.mp4";
// import RoundedBox from "./RoundedBox";

// const SectionFour = () => {
//   return (
//     <div className=" px-5 md:px-10 lg:px-20 py-12 main min-h-[100vh] flex flex-col justify-center items-center bg-white text-black">
//       <h1 className=" leading-none md:text-[3rem] text-4xl font-bold text-center pb-20">
//         Trusted by worldwide largest companies
//       </h1>
//       <div className="video w-full h-[40vh] bg-pink-400">
//         <iframe src={intro} frameborder="0" controls={false} className=" w-full h-full"></iframe>
//       </div>
//       <RoundedBox 
//         img={CW}
//         title={'"We went from 3 to 28 people in just 3 months thanks for the great management of Upcloud."'}
//         author={"Richard Oconor"}
//         authorDesignation={"Marketing Manager at Intelo"}
//         number={"1005+"}
//         p={"documents automated across the entire business"}
//         data = {"Get Started"}
//       />
//       {/* brand logo bar */}
//       <div className="flex justify-center my-10">
//         <div className="brand-bar flex w-[90%]">
//           <BrandIcon icon={logo5} height="h-28" />
//           <BrandIcon icon={logo5} height="h-28" />
//           <BrandIcon icon={logo5} height="h-28" />
//           {/* <BrandIcon icon={logo5} height="h-28" /> */}
//           <span className="hidden md:contents">
//           <BrandIcon icon={logo5} height="h-28" />
//           </span>
//           <span className="hidden lg:contents">
//           <BrandIcon icon={logo5} height="h-28" />
//           </span>
//           <span className="hidden xl:contents">
//           <BrandIcon icon={logo5} height="h-28" />
//           </span>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionFour;


















import React from "react";
import CW from "../assets/CW.png";
import BrandIcon from "./BrandIcon";
import ButtonBlue from "./ButtonBlue";

import logo5 from "../assets/brand-logos/logo5.svg";
import intro from "/assets/intro.mp4"; // Update import path
import RoundedBox from "./RoundedBox";

const SectionFour = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 py-12 main min-h-[100vh] flex flex-col justify-center items-center bg-white text-black">
      <h1 className="leading-none md:text-[3rem] text-4xl font-bold text-center">
        Trusted by the world's largest companies
      </h1>

      {/* Video Section */}
      <div className="video flex justify-center w-full md:w-[60vw] my-10 rounded-2xl border-spacing-5 bg-blue-50 p-1">
        <video src={intro} controls={false} className="w- h-full rounded-2xl bg-slate-400 " autoPlay loop muted />
        {/* Set controls={false} to hide video controls */}
      </div>

      {/* Rounded Box Content */}
      {/* <RoundedBox
        img={CW}
        title={'"We went from 3 to 28 people in just 3 months thanks for the great management of Upcloud."'}
        author="Richard Oconor"
        authorDesignation="Marketing Manager at Intelo"
        number="1005+"
        p="documents automated across the entire business"
        data="Get Started"
      /> */}

      {/* Brand Logo Bar */}
      {/* <div className="flex justify-center my-10 w-[90%]">
        <BrandIcon icon={logo5} height="h-28 " />
        <BrandIcon icon={logo5} height="h-28 " />
        <BrandIcon icon={logo5} height="h-28 " />
        <BrandIcon icon={logo5} height="h-28 md:hidden" /> 
        <BrandIcon icon={logo5} height="h-28 lg:hidden" /> 
        <BrandIcon icon={logo5} height="h-28 xl:hidden" /> 
      </div> */}
      
    </div>
  );
};

export default SectionFour;
