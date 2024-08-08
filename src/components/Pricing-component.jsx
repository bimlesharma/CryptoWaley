import React, { useEffect, useState } from 'react';
import Button from './ButtonBlue';

const Pricing_component = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/assets/servicesData.json')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="pricing">
            {data.length === 0 ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : (
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-2 text-xs">
                    {data.map((service) => (
                        <div key={service.id} className="text-black flex-col justify-around border-8 border-slate-200 rounded-2xl md:min-h-[60vh] bg-white p-6">
                            <div className=' h-[80%]'>
                                <div className='mb-4'>
                                    <h2 className="md:text-3xl text-2xl font-bold">{service.service}</h2>
                                    {service.content && <p className="mb-4 text-sm">{service.content}</p>}

                                </div>
                                <div className="space-y-2" >
                                    <div>
                                        <span className="font-semibold text-4xl md:text-5xl">{service.price}</span> {service.type}
                                    </div>
                                    <div className='text-base font-bold'>{service.description}</div>
                                    {service.price1 && (
                                        <div>
                                            <span className="font-semibold text-4xl md:text-5xl">{service.price1}</span> {service.type1}
                                        </div>
                                    )}
                                    {service.description1 && <div className='text-base font-bold'>{service.description1}</div>}
                                    {service.price2 && (
                                        <div>
                                            <span className="font-semibold text-4xl md:text-5xl">{service.price2}</span> {service.type2}
                                        </div>
                                    )}
                                    <div className='text-base font-bold pb-4'>{service.description2}</div>
                                </div>
                            </div>
                            <div className=' flex justify-end'>
                                <a className='text-base' href='https://linktr.ee/cryptowaley' target='_blank'>
                                    <Button data="Get started" />

                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            )}
            <div className='text-center italic'>
                <p className='text-center mt-4'>FREE Sample Available for both Long and Short Format Content.</p>
                <p><span className='font-bold'>Custom Packages Available</span> - Let's Talk! We offer a free consultation to discuss your needs and pricing options.</p>
            </div>
        </div>
    );
};

export default Pricing_component;
