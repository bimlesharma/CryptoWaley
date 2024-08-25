import React, { useEffect, useState } from 'react';
import Media_pricing_component from './Media-pricing-component';
import Advertise_pricing_component from './Advertise-pricing-component';

const Pricing = () => {

    return (
        <div id='pricing' className="m-auto pt-24 xl:pt-20 md:px-10 text-white lg:px-20 min-h-screen px-5 md:min-h-[80vh] w-full  flex flex-col md:flex-row md:justify-center md:items-center justify-center bg-black items-center bg-gradient-to-r from-black via-black  to-[rgba(47,40,255,0.5)] ">

            <div className='lg:mx-8 w-full md:mx-5'>
                
                <div className="sponsorships  pt-10 lg:pt-0">
                    <h1 className='mx-auto text-center text-5xl'>Advertise with CW</h1>
                    <div className='w-full mt-5 '>
                        <Advertise_pricing_component />
                        <div className='text-center italic mt-4'>
                            {/* <p className='text-center'>FREE Sample Available for both Long and Short Format Content.</p> */}
                            <p><span className='font-bold'>Custom Packages Available</span> - Let's Talk! We offer a free consultation to discuss your needs and pricing options.</p>
                        </div>
                    </div>
                </div>

                <div className="media-service my-20">
                    <h1 className='mx-auto text-center text-5xl'>Media Services</h1>
                    <div className='w-full mt-5 '>
                        <Media_pricing_component />
                        <div className='text-center italic mt-4'>
                            <p className='text-center '>FREE Sample Available for both Long and Short Format Content.</p>
                            <p><span className='font-bold'>Custom Packages Available</span> - Let's Talk! We offer a free consultation to discuss your needs and pricing options.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Pricing;
