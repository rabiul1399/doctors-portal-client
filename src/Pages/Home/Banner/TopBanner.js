import React from 'react';
import chair from '../../../assets/images/chair.png';

const TopBanner = () => {
    return (
        <div>
            <div   className="hero min-h-screen  bg-hero-local"  >
                <div className="hero-content flex-col lg:flex-row-reverse  ">
                    <img src={chair} className="max-w-md mr-7 rounded-lg shadow-2xl" />
                    <div className='ml-11'>
                        <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">A Panel doctor is a doctor or a radiologist who has been appointed by the Australian Government to perform medical examinations on visa applicants.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white hover:from-pink-500 hover:to-yellow-500">Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopBanner;