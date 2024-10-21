import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])
    return (
        <div className='mb-16'>
            <div className='text-center space-y-1'>
                <h3 className='text-2xl text-orange-500 font-semibold'>Services</h3>
                <h2 className='text-4xl font-bold'>Our Service Area</h2>
                <p className='p-4'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;