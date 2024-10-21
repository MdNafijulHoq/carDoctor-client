import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LeftServiceCard = () => {

    const {id} = useParams();
   

    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data => {
            setDetails(data)
        })
    },[id])

    return (
    //     <div className="max-w-3xl p-4 shadow-md dark:bg-gray-50 dark:text-gray-800" bis_skin_checked="1">
    //         <div className="space-y-8" bis_skin_checked="1">
    //             <div className="space-y-2" bis_skin_checked="1">
    //                 <img src={details.img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    
    //             </div>
    //             <div className="space-y-4" bis_skin_checked="1">
    //                 <a rel="noopener noreferrer" href="#" className="block">
    //                     <h3 className="text-xl font-bold dark:text-violet-600">{details.title}</h3>
    //                 </a>
    //                 <p className="leading-snug dark:text-gray-600">{details.description}</p>
                 
    //                     <div className='grid grid-cols-2 mx-auto gap-4'>
                            
    //                             {
    //                                 details?.facility?.map((facility, index) => <div key={index} className="max-w-xs border border-t-rose-700 bg-gray-100 p-6 rounded-md dark:bg-gray-50 dark:text-gray-900" bis_skin_checked="1">
                                    
    //                                     <div className="mb-2" bis_skin_checked="1">
    //                                         <h2 className="text-xl font-semibold tracking-wide">
    //                                             {facility.name}
    //                                         </h2>
    //                                     </div>
    //                                     <p className="dark:text-gray-800">
    //                                     {facility.details}
    //                                     </p> 
    //                                 </div>)
    //                             }

    //                     </div>
                    
    //             </div>
    //         </div>
    // </div>
    <div className="w-full md:max-w-3xl p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="space-y-8">
                <div className="space-y-2">
                    <img
                        src={details.img}
                        alt=""
                        className="block object-cover object-center w-full rounded-md h-60 md:h-72 dark:bg-gray-500"
                    />
                </div>
                <div className="space-y-4">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-lg md:text-xl font-bold dark:text-violet-600">{details.title}</h3>
                    </a>
                    <p className="leading-snug dark:text-gray-600 text-sm md:text-base">{details.description}</p>

                    {/* Facilities */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {details?.facility?.map((facility, index) => (
                            <div
                                key={index}
                                className="border border-t-rose-700 bg-gray-100 p-4 md:p-6 rounded-md dark:bg-gray-50 dark:text-gray-900"
                            >
                                <div className="mb-2">
                                    <h2 className="text-lg md:text-xl font-semibold tracking-wide">{facility.name}</h2>
                                </div>
                                <p className="dark:text-gray-800 text-sm md:text-base">{facility.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftServiceCard;