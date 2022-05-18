import React from 'react';
import { toast } from 'react-toastify';

const DoctorRows = ({doctor,index,refetch,setDeletingDoctor}) => {
    const {name,email,img,specialty} = doctor;
   
   
    return (
        <tr >
            <th>{index+1}</th>
            <th>
            <div className="avatar online">
  <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} alt=''/>
  </div>
</div>
            </th>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
            <label  onClick={()=>setDeletingDoctor(doctor)} htmlFor="my-modal-6" className="btn modal-button ">Delete</label>
       
           
            </td>
            
            
        </tr>
    );
};

export default DoctorRows;