import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(result => setServices(result));
    }, []);



    return (
        <div>
            <h2 className='text-2xl text-primary text-center mt-7 font-bold'>Available Services on {formattedDate} </h2>
            <h2 className='text-center text-lg py-2'>Please select a service.</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
                {
                    services.map(service => <AppointmentService service={service} key={service._id} setTreatment={setTreatment}></AppointmentService>)
                }

            </div>

            {

                treatment && <BookingModal key={treatment._id} date={date} treatment={treatment} setTreatment
                    ={setTreatment}></BookingModal>
            }



        </div>
    );
};

export default AvailableAppointment;