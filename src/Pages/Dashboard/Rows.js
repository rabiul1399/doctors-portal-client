import React from 'react';
import { toast } from 'react-toastify';

const Rows = ({ user,refetch ,index}) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
               toast.error('Failed to Make an admin')
                }
                res.json()
            })
            .then(data => {
              if(data.modifiedCount > 0){
                refetch();
                toast.success('Successfully make admin')
              }
            })
    }


    // const removeAdmin =() =>{
    //     fetch(`http://localhost:5000/user/admin/${role}`, {
    //         method: 'DELETE',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             refetch();
    //             toast.success('Successfully admin delete')
    //         })
    // }
    return (
        <tr >
            <th>{index+1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>} </td>
            <td><button className="btn btn-xs">Remove Admin</button></td>
        </tr>

    );
};

export default Rows;