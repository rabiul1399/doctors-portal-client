import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Rows from './Rows';

const AllUsers = () => {
    const {data:users,isLoading ,refetch} = useQuery('users' , ()=> fetch('http://localhost:5000/user',{
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <h3>This is all Users: {users.length}</h3>


            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>index</th>
        <th>Email</th>
        <th>Make Admin</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,index) =><Rows user={user} index={index} key={user._id} refetch={refetch}></Rows>)
        }
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;