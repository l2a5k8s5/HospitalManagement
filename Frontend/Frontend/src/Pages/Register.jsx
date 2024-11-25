import React, { useContext, useState } from 'react';
import { Context } from '../main';
import { useNavigate, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RiUserStarFill } from 'react-icons/ri';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
      try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/user/patient/register',
        {
          firstname,
          lastname,
          email,
          phone,
          nic,
          dob,
          gender,
          password,
          role: "Patient"
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        }
      );

      toast.success(response.data.message); // Show success toast
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed"); // Show error toast
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container form-component register">
      <div className="upperclass">
      <h2>SIGN UP</h2>
      <p>Please Register to Continue...</p>
      <form onSubmit={handleRegister}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="NIC"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
          <input
            type="date"
            placeholder="DOB"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="others">Other</option>
          </select>
          <input
            type="password"
            placeholder="Set Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div
          style={{
            gap: "10px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <p>Already Registered?</p>
          <Link
            to="/login"
            style={{ textDecoration: "none", alignItems: "center" }}
          >
            Login Now
          </Link>
        </div>

        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Register</button>
        </div>
      </form>

      {/* Include ToastContainer to show toast messages */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
    </div>
  );
};

export default Register;
