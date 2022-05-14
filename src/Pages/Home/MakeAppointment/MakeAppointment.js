import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import MainButton from '../../Shared/MainButton';

const MakeAppointment = () => {
    return (
        <section className=' bg-appointment mb-11'>
           
        <div className="flex justify-center items-center  ">
           <div className="flex-1 hidden lg:block">
           <img className='mt-[-100px]' src={doctor} alt="" />
           </div>
            <div className='flex-1  m-14 lg:m-0'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                <p className="py-6 text-white">A Panel doctor is a doctor or a radiologist who has been appointed by the Australian Government to perform medical examinations on visa applicants.</p>
               <MainButton>Get Stared</MainButton>
            </div>
        </div>
      
        </section>
    );
};

export default MakeAppointment;