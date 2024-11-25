import React, { useContext, useEffect } from "react";
import "./App.css"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import About from "./Pages/About";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Service from "./Pages/Service";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Components/Navbar";
import { Context } from "./main";



const App = () => 
{
  const{isAuthenticated , setIsAuthenticated ,setUser} = useContext(Context);
  useEffect(  ()=>{
    const fetchUser = async()=>{
      try {
        const response = await axios.get( "", {withCredentials: true}); // when any user will login we will get details\
        setIsAuthenticated(true);
        setUser(response.data.user);

      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser(); //calling inside useeffect 
  },[isAuthenticated] ); // when value is changed of the parameter in use effect fetchuser will run again


  return (
    <>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/service' element={<Service/>}/>
        </Routes>
        <ToastContainer position ="top-center"/> 
      </Router>
    
    </>
  )
}

export default App
