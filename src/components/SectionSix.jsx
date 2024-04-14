// import React from 'react';
// import Cards from './Cards';

// function SectionSix() {
//     return (
//         <div className='min-h-[70vh] bg-white text-black'>
//             <div className='mx-24 flex justify-between'>
//             <Cards />
//             <Cards />
//             </div>
//         </div>
//     );
// }

// export default SectionSix;

import React from "react";
import Cards from "./Cards";
import CW from "../assets/CW.png";

function SectionSix() {
  return (
    <div className=" bg-white text-black md:p-10 p-5 lg:p-20 gap-5 md:gap-8 lg:gap-20 flex flex-col md:flex-row justify-center items-center">
      <Cards 
        heading={'Organized Documentation'}
        p={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, excepturi?'}
        img = {CW}
      />
      <Cards 
        heading={'Organized Documentation'}
        p={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, excepturi?'}
        img = {CW}
      />
    </div>
  );
}

export default SectionSix;
