import Button from "./Button";
import ButtonBlue from "./ButtonBlue";
import cw from "../assets/CW.png";


function SectionOne() {
  return (
    <div className=" min-h-[100vh] flex justify-center items-center bg-gradient-to-r from-black via-black  to-[rgba(47,40,255,0.5)] bg-black">
      <div className="left  w-[35%] mr-52">
        <h1 className=" text-6xl font-bold leading-none text-grad">
          Build & launch successful teams easier than ever
        </h1>
        <p className=" text-xl leading-6 my-2 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis neque alias tempore totam autem praesentium sit architecto. Non vitae quam maiores ad nesciunt quibusdam unde dolorum enim? Cupiditate, eligendi sequi!

        </p>
        <ButtonBlue data="Get started"/>
        
      </div>
      <div className="left  w-[35%] ">
        <img src={cw} alt="side-img" />
      </div>
    </div>
  );
}

export default SectionOne;
