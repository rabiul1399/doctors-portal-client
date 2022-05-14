import React from 'react';
import MainButton from '../../Shared/MainButton';

const Contact = () => {
    return (
        <div className='bg-appointment py-6 '>
             <h4 className="text-xl text-center text-primary font-bold">Contact Us</h4>
                    <h2 className='text-3xl text-center text-white'>Stay connected with us</h2>
                    
            <form  className='text-center mt-4'>
            <input className='rounded w-80 h-8 mb-4' type="text" placeholder=' Email Address' />
            <br />
            <input className='rounded w-80 h-8 mb-4 ' type="text" placeholder=' Subject' />
            <br />
            <textarea className="resize w-80 h-20 rounded-md mb-4" placeholder=' Your message'></textarea>
            <br />
            <div >
            <MainButton >Submit</MainButton>
            </div>

            
            
            </form>
        </div>
    );
};


export default Contact;