import React from "react";
import Cards from "./Cards";
import CW from "../assets/CW.png";
import rishabh from "/assets/img/rishabh.jpg";
import keshav from "/assets/img/keshav.jpeg";

function SectionSix() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-white text-black">
      <h1 className=" leading-none md:text-[3rem] text-4xl font-bold text-center pt-20">
        Founding Partners
      </h1>
      </div>
      <div className=" bg-white text-black py-12 md:p-10 p-5 lg:p-20 gap-5 md:gap-8 lg:gap-20 flex flex-col md:flex-row justify-center items-center">
      <Cards 
        heading={'Rishabh Singhal'}
        p={"#Crypto 🇮🇳 || Founder @cryptowaley || Strategist @Dpadfinance in 2022"}
        img = {rishabh}
        URL={"https://twitter.com/rishabhsrishi"}
      />
      <Cards 
        heading={'Keshav Agarwal'}
        p={'Diverse Knowledge of Financial Markets | Blockchain & Crypto Advocate | Speaker at Management Education and Research Institute'}
        img = {keshav}
        URL={"https://www.linkedin.com/in/keshavism/"}
      />
    </div>
    </div>
  );
}

export default SectionSix;
