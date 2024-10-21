import React from 'react';
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const BannerTwo = () => {
    return (

    <div className="p-6 py-12 bg-black dark:bg-violet-600 dark:text-gray-50 rounded-2xl mb-16">
  <div className="container mx-auto">
    <div className="flex flex-col gap-6 lg:flex-row items-center justify-between">
      <div className='flex items-center gap-4'>
        <div>
          <button><LuCalendarClock color='blue' size={35} /></button>
        </div>
        <div className='text-white'>
          <p>We are open Monday-Friday</p>
          <p className='font-semibold'>7 am - 9 pm</p>
        </div>
      </div>
      
      <div className='flex items-center gap-4'>
        <div>
          <button><MdOutlineSettingsPhone color='red' size={35} /></button>
        </div>
        <div className='text-white'>
          <p>Have a question?</p>
          <p className='font-semibold'>+2546 251 2658</p>
        </div>
      </div>
      
      <div className='flex items-center gap-4'>
        <div>
          <button><FaMapLocationDot color='yellow' size={35} /></button>
        </div>
        <div className='text-white'>
          <p>Need a repair? Our address</p>
          <p className='font-semibold'>I Block, Bashundhara R/A</p>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default BannerTwo;