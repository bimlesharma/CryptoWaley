import Button from "./Button";
import ButtonBlue from "./ButtonBlue";
import cw from "../assets/CW.png";


function SectionOne() {
  const url = new URL("https://www.youtube.com/@cryptowaley/");
  return (
    <div id="home" className="m-auto md:px-10 lg:px-20 min-h-screen px-5 lg:px md:min-h-[100vh] w-full  flex flex-col md:flex-row md:justify-center md:items-center justify-center bg-black items-center bg-gradient-to-r from-black via-black  to-[rgba(47,40,255,0.5)] ">
      
      <div className=" m-auto left md:w-[80%] w-full lg:w-full sm:mt-20 mt-16 md:mt-auto ">
        <h1 className="text-3xl mt-10 md:text-4xl lg:text-5xl font-bold leading-none ">
          Empowering Crypto Community with Insights and Innovation
        </h1>
        <p className="my-5 text-lg md:text-xl leading-6 ">
        Cryptowaley is your gateway to the vibrant world of cryptocurrency and blockchain. Explore the latest meetups, insightful news, and groundbreaking projects with us. Join our community to revolutionize the way you engage with digital finance.
        </p>
        
        <div className="">
        <a href="https://www.youtube.com/@cryptowaley" target="_blank">
          <ButtonBlue data="CryptoWaley on Youtube" />
        </a>
        </div>
      </div>
      <div className="right p-5  lg:w-full w-[80%] h-[40%] mb-14 md:mb-0">
        <img src={cw} alt="side-img" />
      </div>
      
    </div>
  );
}

export default SectionOne;
