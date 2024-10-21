import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, img, title, price} = service
    return (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img
                src={img}
                alt=""
                className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-center'>
                    <p className='text-red-500 font-medium'>price: ${price}</p>
                    <Link to={`/servicedetail/${_id}`}><button><FaArrowRight size={20} color='red' /></button></Link>
                </div>
            </div>
            </div>
    );
};

export default ServiceCard;