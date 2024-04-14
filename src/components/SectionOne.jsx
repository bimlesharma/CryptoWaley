import Button from "./Button";
import ButtonBlue from "./ButtonBlue";
import cw from "../assets/CW.png";


function SectionOne() {
  return (
    <div className="py-10 md:px-10 lg:px-20 min-h-[90vh] px-5 lg:px md:min-h-[100vh] flex flex-col md:flex-row md:justify-center  items-center bg-gradient-to-r from-black via-black  to-[rgba(47,40,255,0.5)] bg-black">
      
      <div className="p-2  left md:w-[80%] w-full lg:w-full  mb">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-none my-5">
          Build & launch successful teams easier than ever
        </h1>
        <p className="my-5 text-xl md:text-xl leading-6 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis neque alias tempore totam autem praesentium sit architecto. Non vitae quam maiores ad nesciunt quibusdam unde dolorum enim? Cupiditate, eligendi sequi!

        </p>
        <p className=""><ButtonBlue data="Get started"/></p>
        
      </div>
      <div className="right p-2 mt-5 lg:w-full w-[80%] ">
        <img src={cw} alt="side-img" />
      </div>
      
    </div>
  );
}

export default SectionOne;
