import React from 'react';
import CW from '../assets/CW.png';

const Cards = ({heading, p, img}) => {
    return (
        <div className='h-[25rem]   font-bold text-white bg-cover bg-center bg-black rounded-3xl'
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.001)), url(${img})` }}>
            <h1 className='text-2xl py-5 pt-10 ml-5 z-10'>{heading}</h1>
            <p className='text-md ml-5 w-[60%] pb-32'>{p}</p>
        </div>
    );
};

export default Cards;


// import React from 'react';
// import CW from '../assets/CW.png';

// const Cards = ({ heading, p, img }) => {
//     return (
//         <div className='max-w-xl md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mb-8'>
//             <div className='relative h-80 md:h-96 lg:h-96 xl:h-96 bg-black bg-cover bg-center rounded-3xl overflow-hidden'>
//                 <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90'></div>
//                 <div className='absolute inset-0 flex flex-col justify-center items-start px-6 md:px-8 lg:px-10 xl:px-12 text-white'>
//                     <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6'>{heading || 'Organized Documentation'}</h1>
//                     <p className='text-sm md:text-md lg:text-lg xl:text-xl mb-6 md:mb-8'>{p || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, excepturi?'}</p>
//                 </div>
//                 <img src={CW} alt='Card Background' className='hidden md:block absolute inset-0 w-full h-full object-cover opacity-40' />
//             </div>
//         </div>
//     );
// };

// export default Cards;
