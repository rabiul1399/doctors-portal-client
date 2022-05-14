
const AppointmentService = ({ service ,setTreatment}) => {
    const { name, slots } = service;

    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl  text-center ">
                <div className="card-body">
                    <h2 className='card-title  justify-center text-secondary'>{name}</h2>
                    <p>
                        {
                            slots.length 
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date.</span>
                        }
                    </p>

                    <p>{slots.length} {slots.length > 1 ? 'spaces': 'space'} available</p>
                    <div className="card-actions justify-center">
                   
                    <label  htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white hover:from-pink-500 hover:to-yellow-500 hover:border-0" 
                     disabled={slots.length === 0}
                     onClick={() =>setTreatment(service)}
                     >Book Appointment</label>
                       
                    </div>
                   



                </div>

            </div>

        </div>
    );
};

export default AppointmentService;