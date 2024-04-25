import Button from "./Button";
import ButtonBlue from "./ButtonBlue";
import cw from "../assets/CW.png";


function SectionOne() {
  return (
    <div className="py-10 m-auto md:px-10 lg:px-20 h-screen px-5 lg:px md:min-h-[100vh] flex flex-col md:flex-row md:justify-center  items-center bg-gradient-to-r from-black via-black  to-[rgba(47,40,255,0.5)] bg-black">
      
      <div className="p-2 m-auto left md:w-[80%] w-full lg:w-full ">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-none my-5">
          Empowering Crypto Community with Insights and Innovation
        </h1>
        <p className="my-5 text-xl md:text-xl leading-6 ">
        Cryptowaley is your gateway to the vibrant world of cryptocurrency and blockchain. Explore the latest meetups, insightful news, and groundbreaking projects with us. Join our community to revolutionize the way you engage with digital finance.
        </p>
        <a href="https://www.youtube.com/@cryptowaley" target="_blank"><ButtonBlue data="CryptoWaley on Youtube"/></a>
        
      </div>
      <div className="right p-2 mt-1 lg:w-full w-[80%] ">
        <img src={cw} alt="side-img" />
      </div>
      
    </div>
  );
}

export default SectionOne;
