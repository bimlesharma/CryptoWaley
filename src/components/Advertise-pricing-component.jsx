import React, { useEffect, useState } from 'react';
import Button from './ButtonBlue';

const Media_pricing_component = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/assets/advertiseServicesData.json')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="pricing">
            {data.length === 0 ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : (
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5 text-xs">
                    {data.map((service) => (
                        <div key={service.id} className=" text-slate-800 flex-col justify-around border-8 border-slate-200 rounded-2xl md:min-h-[70vh] bg-white p-6">
                            <div className=' lg:h-[85%] md:h-[89%]'>
                                <div className='mb-4'>
                                    <h2 className="md:text-3xl text-2xl font-bold">{service.service}</h2>
                                    {service.content && <p className="mb-4 text-sm">{service.content}</p>}

                                </div>
                                <div className="space-y-2" >
                                    <span className='text-2xl font-bold'>{service.subHeading}</span>
                                    
                                    <div className='bg-slate-200 rounded-lg p-2'>
                                        <div>
                                            <span className="font-semibold text-4xl">{service.price}</span> {service.type}
                                        </div>
                                        <div className='text-base font-bold'>{service.description}</div>
                                    </div>

                                    <div className='bg-slate-200 rounded-lg p-2'>
                                    {service.price1 && (
                                        <div>
                                            <span className="font-semibold text-4xl">{service.price1}</span> {service.type1}
                                        </div>
                                    )}
                                    {service.description1 && <div className='text-base font-bold'>{service.description1}</div>}
                                    </div>
                                    
                                    <div className=''>
                                    {service.price2 && (
                                        <div>
                                            <span className="font-semibold text-4xl">{service.price2}</span> {service.type2}
                                        </div>
                                    )}
                                    <div className='text-base font-bold'>{service.description2}</div>
                                    </div>
                                    <div className='bg-slate-200 rounded-lg p-2 text-sm  font-semibold'>
                                        <p className='my-1'>{service.specs0}</p>
                                        <p className='my-1'>{service.specs1}</p>
                                        <p className='my-1'>{service.specs2}</p>
                                        <p className='my-1'>{service.specs3}</p>
                                        <p className='my-1'>{service.specs4}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex justify-end mt-2 md:mt-0'>
                                <a className='text-base' href='https://linktr.ee/cryptowaley' target='_blank'>
                                    <Button data="Get started" />

                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default Media_pricing_component;
