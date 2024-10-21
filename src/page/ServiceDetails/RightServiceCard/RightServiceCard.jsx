import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const RightServiceCard = () => {

    const {id} = useParams();

    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data => {
            setDetails(data)
        })
    },[id])

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])

    
    return (
        // <div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto">
            
        //     <div className="card-body space-y-4">
        //         <h2 className="card-title">Services</h2>
        //         {
        //             services?.map((service, index) => 
        //                 <div key={index} className="collapse collapse-plus bg-base-200">
        //             <input type="radio" name="my-accordion-3" />
        //             <div className="collapse-title text-xl font-medium">{service.title}</div>
        //             <div className="collapse-content">
        //                  <p className='text-xl'>Price: ${service.price}</p>
        //                  </div>
        //                  </div>    
        //                  )
        //         }
        //                  <h3 className='text-3xl font-bold'>Price: ${details.price}</h3>
        //                  <button className='btn btn-secondary'>Proceed Checkout</button>
        //     </div>
        // </div>
        <div className="w-full md:w-96 card card-compact bg-base-100 shadow-xl">
            <div className="card-body space-y-4">
                <h2 className="card-title text-xl md:text-2xl">Services</h2>
                {services?.map((service, index) => (
                    <div key={index} className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-lg md:text-xl font-medium">{service?.title}</div>
                        <div className="collapse-content">
                            <p className="text-lg md:text-xl">Price: ${service?.price}</p>
                        </div>
                    </div>
                ))}

                <h3 className="text-2xl md:text-lg lg:text-xl xl:text-xl font-bold">Price of <span className='text-red-500'>{details?.title}</span> Service: <span className='text-red-500'>${details?.price}</span></h3>
                <Link to={`/booking/${details?._id}`}><button className="btn btn-secondary w-full">Proceed Checkout</button></Link>
            </div>
        </div>
    );
};

export default RightServiceCard;