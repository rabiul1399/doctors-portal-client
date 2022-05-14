import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);
 
   
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(result => setServices(result));
    },[]);


    const handleBooking = event =>{
        event.preventDefault();
        const slot= event.target.slot.value;
        console.log(treatment.name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <h2 className='text-2xl text-primary text-center mt-7 font-bold'>Available Services on {format(date, 'PP')} </h2>
            <h2 className='text-center text-lg py-2'>Please select a service.</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
                {
                    services.map(service =><AppointmentService service={service} key={service._id} setTreatment={setTreatment}></AppointmentService> )
                }

            </div>


{
    treatment && 
    <div>
    <input type="checkbox" id="booking-modal" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-lg">{treatment.name}</h3>
            <form onSubmit={handleBooking}>
                <input type="text" value={format(date, 'PP')}  className=" border-2 input input-bordered  w-full my-1 " disabled />

                <select name='slot' className="select select-bordered w-full my-1 ">
                   
                    {
                        treatment.slots.map(slot => <option>{slot}</option>)
                    }
                </select>
                <input type="name" placeholder='Full Name' className=" border-2 input input-bordered  w-full my-1 " />
                <input type="email" placeholder='Email' className=" border-2 input input-bordered  w-full my-1 " />
                <input type="number" placeholder='Phone Number' className=" border-2 input input-bordered  w-full my-1 " />
                <input type="submit" className='btn btn-secondary w-full my-1' value='Submit' />
            </form>

        </div>
    </div>
</div>
}



        </div>
    );
};

export default AvailableAppointment;