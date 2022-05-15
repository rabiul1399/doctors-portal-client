import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Form/Login/Login";
import RequireAuth from "./Pages/Form/RequireAuth/RequireAuth";
import Signup from "./Pages/Form/Signup/Signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";


function App() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />

        <Route path='/about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
