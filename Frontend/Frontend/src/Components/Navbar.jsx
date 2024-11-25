import React, { useContext, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../main';
import {GiHamburgerMenu} from "react-icons/gi";


const Navbar = () => { 
    const[show , setShow] = useState(false);
    const {isAuthenticated ,setIsAuthenticated} = useContext(Context);
    const navigateTo = useNavigate() 
    const handleLogout = async() =>
    {
        try {
            await axios.get(   "http://localhost:4000/api/v1/user/patient/logout" , {withCredentials: true}   ).then(  res=>{    toast.success(res.data.message); setIsAuthenticated(false);   }      ); // url needed
        } catch (error) {
            toast.error(err.response.data.message);
        }
    }


    const goToLogin = async() =>
    {
        navigateTo("/login") // going to login page 
    }


    return (
        <nav className="container">
            {/* Logo */}
            <div className="logo">
                <img src="./liberty.png" alt="logo" className="logo-img" />
            </div>

            {/* Navigation Links */}
            <div className={show ? "navLinks showmenu" : "navLinks"}>
                <div className="links">
                    <Link
                        className="Home"
                        to="/"
                        onClick={() => setShow(false)}
                    >
                        HOME
                    </Link>
                    <Link
                        className="AboutUs"
                        to="/about"
                        onClick={() => setShow(false)}
                    >
                        ABOUT US
                    </Link>
                    <Link
                        className="ContactUs"
                        to="/contact"
                        onClick={() => setShow(false)}
                    >
                        CONTACT US
                    </Link>
                    <Link
                        className="AllDoctors"
                        to="/doctors"
                        onClick={() => setShow(false)}
                    >
                        ALL DOCTORS
                    </Link>
                </div>
                <div className='appointment-loginbtn'>

                    {/* Appointment Button */}

                    <div
                        className="appointment-btn"
                        onClick={() => {
                            if (setShow) setShow(false);
                            navigateTo("/appointment");
                        }}
                    >
                        APPOINTMENT
                    </div>

                    {/* Authentication Buttons */}
                    {isAuthenticated ? (
                        <button className="logoutBtn" onClick={handleLogout}>
                            LOGOUT
                        </button>
                    ) : (
                        <button
                            className="loginBtn"
                            onClick={() => {
                                if (setShow) setShow(false);
                                navigateTo("/login");
                            }}
                        >
                            LOGIN
                        </button>
                    )}
                </div>
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={() => setShow(!show)}>
                <GiHamburgerMenu />
            </div>
        </nav>
    );
}
export default Navbar