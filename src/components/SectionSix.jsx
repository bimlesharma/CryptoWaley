import React from "react";
import Cards from "./Cards";
import CW from "../assets/CW.png";
import rishabh from "/assets/img/rishabh.jpg";
import keshav from "/assets/img/keshav.jpeg";

function SectionSix() {
  return (
    <div className=" bg-white text-black py-12 md:p-10 p-5 lg:p-20 gap-5 md:gap-8 lg:gap-20 flex flex-col md:flex-row justify-center items-center">
      <Cards 
        heading={'Rishabh Singhal'}
        p={"#Crypto 🇮🇳 || Founder @cryptowaley || Strategist @Dpadfinance in 2022"}
        img = {rishabh}
      />
      <Cards 
        heading={'Keshav Agarwal'}
        p={'Diverse Knowledge of Financial Markets | Blockchain & Crypto Advocate | Speaker at Management Education and Research Institute'}
        img = {keshav}
      />
    </div>
  );
}

export default SectionSix;
