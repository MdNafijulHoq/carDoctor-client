import React from 'react';
import ServiceBanner from '../ServiceBanner/ServiceBanner';
import LeftServiceCard from '../LeftServiceCard/LeftServiceCard';
import RightServiceCard from '../RightServiceCard/RightServiceCard';

const ServiceDetail = () => {
   
    return (
        <div>
            <ServiceBanner></ServiceBanner>
            <div className='flex justify-center gap-4 flex-col md:flex-row border border-red-800'>
                <LeftServiceCard></LeftServiceCard>
                <RightServiceCard></RightServiceCard>
            </div>
        </div>
    );
};

export default ServiceDetail;