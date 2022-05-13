import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Login from "./Pages/Form/Login/Login";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";


function App() {
  return (
    <div className="">
      <Navbar></Navbar>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
      
     <Route path='/about' element={<About></About>}></Route>
     <Route path='login' element
     ={<Login></Login>}></Route>
   </Routes>
    </div>
  );
}

export default App;
