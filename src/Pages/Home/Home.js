import React from 'react';
import Appointment from './Appointment/Appointment';
import TopBanner from './Banner/TopBanner';
import Info from './Info/Info'
import ServiceBanner from './Services/ServiceBanner/ServiceBanner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
         <Info></Info>
         <Services></Services>
         <ServiceBanner></ServiceBanner>
         <Appointment></Appointment>
        </div>
    );
};

export default Home;