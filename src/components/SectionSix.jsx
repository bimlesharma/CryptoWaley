import React from 'react';
import Cards from './Cards';

function SectionSix() {
    return (
        <div className='min-h-[70vh] bg-white text-black'>
            <div className='mx-24 flex justify-between'>
            <Cards />
            <Cards />
            </div>
        </div>
    );
}

export default SectionSix;