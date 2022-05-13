import React from 'react';
import treatment from '../../../../assets/images/treatment.png';

const ServiceBanner = () => {
    return (
        <div>
             <div   className="hero min-h-screen "  >
                <div className="hero-content flex-col lg:flex-row  ">
                    <img src={treatment} className="max-w-md mr-7 rounded-lg shadow-2xl" />
                    <div className='ml-11 lg:w-80'>
                        <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">A Panel doctor is a doctor or a radiologist who has been appointed by the Australian Government to perform medical examinations on visa applicants.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white hover:from-pink-500 hover:to-yellow-500">Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceBanner;