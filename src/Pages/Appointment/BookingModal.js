import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({date, treatment  }) => {
    
    const { name, slots } = treatment;

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form>
                        <input type="text"  className=" border-2 input input-bordered  w-full my-1 " disabled />

                        <select name='slot' className="select select-bordered w-full my-1 ">
                           
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder='Full Name' className=" border-2 input input-bordered  w-full my-1 " />
                        <input type="text" placeholder='Phone Number' className=" border-2 input input-bordered  w-full my-1 " />
                        <input type="text" placeholder='Email' className=" border-2 input input-bordered  w-full my-1 " />
                        <input type="submit" className='btn btn-secondary w-full' value='Submit' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;