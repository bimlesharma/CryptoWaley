import React from 'react';
import Pricing_component from './Pricing-component';

const Pricing = () => {
    return (
        // <div className=''>
        //     <div className='pt-24 pb-20 p-5'>
        //         <Pricing_component />

        //     </div>

        // </div>
        <div id='pricing' className="m-auto pt-24 pb-10 md:px-10 text-white lg:px-20 min-h-screen px-5 lg:px md:min-h-[100vh] w-full  flex flex-col md:flex-row md:justify-center md:items-center justify-center bg-black items-center bg-gradient-to-r from-black via-black  to-[rgba(47,40,255,0.5)] ">

            <div className='lg:mx-8 w-full md:mx-5'>
                <h1 className='mx-auto text-center text-5xl'>Services</h1>
                <div className='w-full mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-2'>
                    <Pricing_component />
                    <Pricing_component />
                    <Pricing_component />
                    <Pricing_component />

                </div>
            </div>

        </div>
    );
};

export default Pricing;
