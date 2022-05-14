import React from 'react';
import treatment from '../../../../assets/images/treatment.png';
import MainButton from '../../../Shared/MainButton';

const ServiceBanner = () => {
    return (
        <div>
             <div   className="hero min-h-screen "  >
                <div className="hero-content flex-col lg:flex-row  ">
                    <img src={treatment} className="max-w-md mr-7 rounded-lg shadow-2xl" />
                    <div className='ml-11 lg:w-80'>
                        <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">A Panel doctor is a doctor or a radiologist who has been appointed by the Australian Government to perform medical examinations on visa applicants.</p>
                        <MainButton>GET STARTED</MainButton>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceBanner;