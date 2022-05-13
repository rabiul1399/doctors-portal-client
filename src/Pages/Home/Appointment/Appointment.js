import React from 'react';
import doctor from '../../../assets/images/doctor.png';
const Appointment = () => {
    return (
        <div   className="hero min-h-screen bg-accent "  >
        <div className="hero-content flex-col lg:flex-row  ">
            <img src={doctor} className="max-w-md mr-7 rounded-lg shadow-2xl" />
            <div className='ml-11'>
                <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">A Panel doctor is a doctor or a radiologist who has been appointed by the Australian Government to perform medical examinations on visa applicants.</p>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white hover:from-pink-500 hover:to-yellow-500">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Appointment;