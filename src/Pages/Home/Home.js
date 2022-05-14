import React from 'react';
import Appointment from './Appointment/Appointment';
import TopBanner from './Banner/TopBanner';
import Contact from './Contect/Contact';
import Footer from './Footer/Footer';
import Info from './Info/Info'
import ServiceBanner from './Services/ServiceBanner/ServiceBanner';
import Services from './Services/Services';
import Testimonials from './Testimonials.js/Testimonials';

const Home = () => {
    return (
        <div className=''>
            <TopBanner></TopBanner>
         <Info></Info>
         <Services></Services>
         <ServiceBanner></ServiceBanner>
         <Appointment></Appointment>
         <Testimonials></Testimonials>
         <Contact></Contact>
         <Footer></Footer>
        </div>
    );
};

export default Home;