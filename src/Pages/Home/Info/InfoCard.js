import React from 'react';

const InfoCard = ({ img, dg, bgClass }) => {

  const { title, describe } = dg;
  return (
    <div className={`card text-white  lg:h-44 ${bgClass} lg:card-side bg-base-100 shadow-xl `}>
      <figure className='pl-4 mt-4 lg:mt-0' ><img src={img} alt="Album" /></figure>
      <div className="card-body mt-4">
        <h2 className="card-title ">{title}</h2>
        <p className=''>{describe}</p>
      </div>
    </div>
  );
};

export default InfoCard;