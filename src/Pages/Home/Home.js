import React from 'react';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import TopBanner from './Banner/TopBanner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Info from './Info/Info'
import ServiceBanner from './Services/ServiceBanner/ServiceBanner';
import Services from './Services/Services';
import Testimonials from './Testimonials.js/Testimonials';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
         <Info></Info>
         <Services></Services>
         <ServiceBanner></ServiceBanner>
         <MakeAppointment></MakeAppointment>
         <Testimonials></Testimonials>
         <Contact></Contact>
         <Footer></Footer>
        </div>
    );
};

export default Home;