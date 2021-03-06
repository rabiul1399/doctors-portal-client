import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin]=useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center mt-5 ">
          <h2 className='text-4xl text-primary font-bold '>Dashboard</h2>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden flex flex-col items-end">Open drawer</label>
         <Outlet></Outlet>
        
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content pt-14">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>My Appointments: </Link></li>
            <li><Link to='/dashboard/review'>My Review</Link></li>
           {
             admin &&  <>
             <li><Link to='/dashboard/users'>All Users</Link></li>
             <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
             <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
             </>
           }
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;