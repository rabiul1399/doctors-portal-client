import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'


const Services = () => {
    return (
        <div className='mt-14'>
            <h2 className='text-secondary font-bold text-center'>Our Services</h2>
            <h1 className='text-3xl pb-14 text-center'>Services We Provide</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 m-6 gap-6 '>
                <div className="card  bg-base-100 shadow-xl">
                    <figure>
                        <img src={fluoride} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fluoride Treatment</h2>
                        <p>The teeth are the hardest substances in the human body. </p>

                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure>
                        <img src={cavity} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cavity Filling</h2>
                        <p>The teeth are the hardest substances in the human body. </p>

                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure>
                        <img src={whitening} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Whitening</h2>
                        <p>The teeth are the hardest substances in the human body. </p>

                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Services;