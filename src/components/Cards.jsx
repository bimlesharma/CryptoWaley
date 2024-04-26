import React from 'react';
import CW from '../assets/CW.png';
import ButtonBlue from './ButtonBlue';

const Cards = ({heading, p, img, URL}) => {
    return (
        <div className='h-[35rem] flex flex-col justify-end md:w-[40%] w-[95%] mx-16 md:mx-0  font-bold text-white bg-cover bg-center bg-black rounded-3xl'
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.001), rgba(0,0,0,0.7)), url(${img})` }}>
            <h1 className='text-2xl py-1 pt-1 ml-5 z-10'>{heading}</h1>
            <p className='text-md ml-5 w-[90%] pb-1'>{p}</p>
            <a href={URL} target="_blank" className='ml-5 pb-5'><ButtonBlue data='Connect with me'/></a>
        </div>
    );
};

export default Cards;


