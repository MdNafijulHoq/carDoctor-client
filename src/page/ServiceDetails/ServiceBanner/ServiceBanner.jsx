import React from 'react';
import img1 from '../../../../src/assets/images/checkout/checkout.png'

const ServiceBanner = () => {
    return (
        // <div className="p-6 py-12 dark:bg-violet-600 dark:text-gray-50" bis_skin_checked="1">
        //     <div className="container mx-auto" bis_skin_checked="1">
        //         <div className="flex flex-col lg:flex-row items-center justify-between relative rounded-xl" bis_skin_checked="1">
        //             <img className='mx-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]' src={img1} alt="" />
                    
        //              <div className="text-white absolute h-full left-36 top-28">
        //                 <h2 className="text-5xl  font-bold">
        //                         Service Details</h2>
        //                         </div>
        //                         <div className='absolute bottom-0 left-[500px]'>
        //                         <p className='bottom-0 text-lg text-white bg-orange-400 p-2 rounded-lg font-semibold'>Home/Service Details</p>
        //                         </div>
                     
        //         </div>
        //     </div>
        // </div>
        <div className="p-6 py-12 dark:bg-violet-600 dark:text-gray-50">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between relative rounded-xl">
                    <img 
                        className='mx-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full lg:w-auto rounded-lg' 
                        src={img1} 
                        alt="" 
                    />
                    
                    <div className="text-white absolute h-full left-8 top-8 sm:left-16 sm:top-14 md:left-20 md:top-16 lg:left-28 lg:top-24 xl:left-32 xl:top-28">
                        <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            Service Details
                        </h2>
                    </div>

                    <div className='absolute bottom-0 left-[160px] sm:left-[250px] md:left-[300px] lg:left-[450px] xl:left-[500px]'>
                        <p className='text-xs md:text-base lg:text-lg text-white bg-orange-400 p-2 rounded-lg font-semibold'>
                            Home/Service Details
                        </p>
                    </div>
                </div>
            </div>
</div>

    

    );
};

export default ServiceBanner;