import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import BannerTwo from '../BannerTwo/BannerTwo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <BannerTwo></BannerTwo>
        </div>
    );
};

export default Home;