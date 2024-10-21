import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero p-6 bg-base-200 mt-16 mb-16 rounded-xl">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
        <img
        src={person}
        className="w-3/4 rounded-lg shadow-2xl mx-auto" />
        <img
        src={parts}
        className="w-1/2 absolute right-8 mx-auto border-white border-8 top-1/2 rounded-lg shadow-2xl" />
    </div>
    <div className='lg:w-1/2 space-y-4 p-5'>
      <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-3">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <p className="py-3">
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <button className="btn btn-warning">Get More Info</button>
    </div>
  </div>
</div>

       
    );
};

export default About;