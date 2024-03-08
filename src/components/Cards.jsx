import React from 'react';
import CW from '../assets/CW.png';

const Cards = ({heading, p, img}) => {
    return (
        <div className='h-[25rem] text-white bg-ble-950 bg-cover bg-center bg-black w-[40rem] rounded-3xl'
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.001)), url(${CW})` }}>
            <h1 className='text-2xl py-5 pt-10 ml-5 z-10 font-bold'>Organized documentation</h1>
            <p className='text-md ml-5 w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, excepturi?</p>
        </div>
    );
};

export default Cards;