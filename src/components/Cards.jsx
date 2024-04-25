import React from 'react';
import CW from '../assets/CW.png';

const Cards = ({heading, p, img}) => {
    return (
        <div className='h-[35rem] flex flex-col justify-end md:w-[40%] mx-16 md:mx-0  font-bold text-white bg-cover bg-center bg-black rounded-3xl'
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.001), rgba(0,0,0,0.7)), url(${img})` }}>
            <h1 className='text-2xl py-2 pt-1 ml-5 z-10'>{heading}</h1>
            <p className='text-md ml-5 w-[60%] mb-5'>{p}</p>
        </div>
    );
};

export default Cards;


