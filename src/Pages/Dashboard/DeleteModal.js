import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deletingDoctor,refetch,setDeletingDoctor}) => {
    const { name ,email} = deletingDoctor;


    const handaleDelete =() =>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:'DELETE',
            headers: {

                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res =>res.json())
        .then(data=>{
            if(data.deletedCount){
                toast.success(`Doctor: ${name} is deleted`);
                setDeletingDoctor(null)
                refetch();
            }
        })
    }

    return (
        <div>



<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Are you sure you want to delete ${name} </h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <button   onClick={()=>handaleDelete()}  for="my-modal-6" className="btn btn-xs bg-red-500 border-0">delete</button>
      <label for="my-modal-6" className="btn btn-xs">cancel</label>
    </div>
  </div>
</div>
</div>
    );
};

export default DeleteModal;