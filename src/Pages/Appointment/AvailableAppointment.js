import { format } from 'date-fns';
import React, {useState } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';
import Loading from '../Shared/Loading'
import { useQuery } from 'react-query';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const {data:services, isLoading, refetch } = useQuery(['available',formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
      res.json()
    )
  )

if(isLoading){
    return <Loading></Loading>
}

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

                treatment && <BookingModal 
                 key={treatment._id} 
                date={date} treatment={treatment} 
                setTreatment={setTreatment} 
                refetch={refetch}
                    ></BookingModal>
            }



        </div>
    );
};

export default AvailableAppointment;