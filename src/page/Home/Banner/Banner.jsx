import React from 'react';
import img1 from '../../../../src/assets/images/banner/1.jpg'
import img2 from '../../../../src/assets/images/banner/2.jpg'
import img3 from '../../../../src/assets/images/banner/3.jpg'
import img4 from '../../../../src/assets/images/banner/4.jpg'
import img5 from '../../../../src/assets/images/banner/5.jpg'
import img6 from '../../../../src/assets/images/banner/6.jpg'


const Banner = () => {

   

    return (

        <div className="carousel w-full h-[400px] sm:h-[500px] md:h-[500px] lg:h-[550px] xl:h-[550px]">
        <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-full object-cover rounded-xl" />
        <div className="absolute h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 sm:space-y-7 w-3/4 sm:w-1/2 pl-6 sm:pl-12 mt-12 sm:mt-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Affordable price For Car Servicing
            </h2>
            <p className="text-xs sm:text-base">
                There are Many Variations of Passages of Available, But The Majority Have Suffered Alteration In Some Form
            </p>
            <div>
                <button className="btn btn-secondary mr-3 sm:mr-5">Discover More</button>
                <button className="btn btn-outline btn-info">Latest Project</button>
            </div>
            </div>
        </div>
        <div className="absolute left-5 right-5 bottom-2 flex -translate-y-1/2 transform justify-end">
            <a href="#slide4" className="btn btn-circle mr-4">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full h-full rounded-xl object-cover" />
        <div className="absolute h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 sm:space-y-7 w-3/4 sm:w-1/2 pl-6 sm:pl-12 mt-12 sm:mt-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Affordable price For Car Servicing
            </h2>
            <p className="text-xs sm:text-base">
                There are Many Variations of Passages of Available, But The Majority Have Suffered Alteration In Some Form
            </p>
            <div>
                <button className="btn btn-secondary mr-3 sm:mr-5">Discover More</button>
                <button className="btn btn-outline btn-info">Latest Project</button>
            </div>
            </div>
        </div>
        <div className="absolute left-5 right-5 bottom-2 flex -translate-y-1/2 transform justify-end">
            <a href="#slide1" className="btn btn-circle mr-4">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full h-full rounded-xl object-cover" />
        <div className="absolute h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 sm:space-y-7 w-3/4 sm:w-1/2 pl-6 sm:pl-12 mt-12 sm:mt-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Affordable price For Car Servicing
            </h2>
            <p className="text-xs sm:text-base">
                There are Many Variations of Passages of Available, But The Majority Have Suffered Alteration In Some Form
            </p>
            <div>
                <button className="btn btn-secondary mr-3 sm:mr-5">Discover More</button>
                <button className="btn btn-outline btn-info">Latest Project</button>
            </div>
            </div>
        </div>
        <div className="absolute left-5 right-5 bottom-2 flex -translate-y-1/2 transform justify-end">
            <a href="#slide2" className="btn btn-circle mr-4">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl h-full object-cover" />
        <div className="absolute h-full left-0 rounded-xl top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 sm:space-y-7 w-3/4 sm:w-1/2 pl-6 sm:pl-12 mt-12 sm:mt-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Affordable price For Car Servicing
            </h2>
            <p className="text-xs sm:text-base">
                There are Many Variations of Passages of Available, But The Majority Have Suffered Alteration In Some Form
            </p>
            <div>
                <button className="btn btn-secondary mr-3 sm:mr-5">Discover More</button>
                <button className="btn btn-outline btn-info">Latest Project</button>
            </div>
            </div>
        </div>
        <div className="absolute left-5 right-5 bottom-2 flex -translate-y-1/2 transform justify-end">
            <a href="#slide3" className="btn btn-circle mr-4">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
        </div>

        <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl h-full object-cover" />
        <div className="absolute h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 sm:space-y-7 w-3/4 sm:w-1/2 pl-6 sm:pl-12 mt-12 sm:mt-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Affordable price For Car Servicing
            </h2>
            <p className="text-xs sm:text-base">
                There are Many Variations of Passages of Available, But The Majority Have Suffered Alteration In Some Form
            </p>
            <div>
                <button className="btn btn-secondary mr-3 sm:mr-5">Discover More</button>
                <button className="btn btn-outline btn-info">Latest Project</button>
            </div>
            </div>
        </div>
        <div className="absolute left-5 right-5 bottom-2 flex -translate-y-1/2 transform justify-end">
            <a href="#slide4" className="btn btn-circle mr-4">❮</a>
            <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
        </div>

        <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl h-full object-cover" />
        <div className="absolute h-full left-0 rounded-xl top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 sm:space-y-7 w-3/4 sm:w-1/2 pl-6 sm:pl-12 mt-12 sm:mt-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Affordable price For Car Servicing
            </h2>
            <p className="text-xs sm:text-base">
                There are Many Variations of Passages of Available, But The Majority Have Suffered Alteration In Some Form
            </p>
            <div>
                <button className="btn btn-secondary mr-3 sm:mr-5">Discover More</button>
                <button className="btn btn-outline btn-info">Latest Project</button>
            </div>
            </div>
        </div>
        <div className="absolute left-5 right-5 bottom-2 flex -translate-y-1/2 transform justify-end">
            <a href="#slide5" className="btn btn-circle mr-4">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
        </div>
        </div>


       
    );
};

export default Banner;