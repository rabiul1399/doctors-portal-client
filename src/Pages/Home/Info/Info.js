import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const info = () => {
const dg ={ 
title: "Opening Hours",
describe: "Your clock is 12 minutes and 47.1 seconds behind.",
}
const dg1 ={ 
title: "Visit our location",
describe: "Brooklyn, NY 10036, United States.",
}
const dg2 ={ 
title: "Contact us now",
describe: "+000 123 456789",
}
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-6 mb-6  rounded-lg gap-4'>
            <InfoCard dg={dg} bgClass="bg-gradient-to-r from-secondary to-primary " img={clock}></InfoCard>
            <InfoCard dg={dg1} bgClass="bg-accent " img={marker}></InfoCard>
            <InfoCard dg={dg2} bgClass="bg-gradient-to-r from-secondary to-primary " img={phone}></InfoCard>
        </div>
    );
};

export default info;