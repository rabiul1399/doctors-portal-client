import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import DoctorRows from './DoctorRows';

const ManageDoctor = () => {
    const [deletingDoctor,setDeletingDoctor] = useState(null)
    const {data:doctors,isLoading,refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {

            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
   
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
   
    return (
        <div>
            <h3>
                This is manage Doctor : {doctors.length}
            </h3>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRows doctor={doctor} index={index} key={doctor._id} refetch={refetch} setDeletingDoctor={setDeletingDoctor}></DoctorRows>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <DeleteModal deletingDoctor={deletingDoctor}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
                ></DeleteModal>
            }
        </div>
     
    );
};

export default ManageDoctor;