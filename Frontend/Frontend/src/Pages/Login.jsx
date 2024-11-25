// import React, {useContext, useState } from 'react';
// import { Link, useNavigate ,Navigate} from 'react-router-dom';
// import { Context } from '../main';
// import { toast} from 'react-toastify';
// import "../Pages/login.css";
// import axios from 'axios';

// const Login = () => {
//   const {isAuthenticated , setIsAuthenticated} = useContext(Context);
//   const [email , setEmail] = useState("");
//   const [password , setPassword] = useState("");
//   // const [confirmPassword , setConfirmPassword] = useState("");

//   const navigateTo = useNavigate();
//   const handleLogin = async(e)=>
//   { 
//     e.preventDefault(); // to prevent page reloading 
//     try {
//       // backend ka url dalna h 
//         const response = await axios.post('http://localhost:4000/api/v1/user/login',
//           {email,password, role: "Patient"},
//           { withCredentials:true, headers:{  "Content-Type": "application/json"  },}
//         ); 
//         toast.success(response.data.message);
//         setIsAuthenticated(true);
//         navigateTo("/"); 
//     } catch (error) 
//     {
//           console.error('Error during login :',error);
//           const errorMessage=error.response?.data?.message ||"An unexpectd error occurred";
//           toast.error(errorMessage);
//     }
//   };
  
//   if(isAuthenticated){
//     return <Navigate to = {"/"}/>; // navigate to forward slash
//   }
//   return (
//     <div className='container form-component login-form'>
//       <h2> Sign In</h2>
//       <p>Please login to continue</p>
//       {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, deleniti facilis nihil quis similique rerum!</p> */}
//       <form onSubmit={handleLogin}>
//         <input type="text"  placeholder='Email' value={email} onChange={   (e)=>  setEmail(e.target.value) }/>
//         <input type="password" placeholder='Password' value={password} onChange={   (e)=>  setPassword(e.target.value) } />
//         {/* <input type="password" placeholder=' Confirm password' value={confirmPassword} onChange={   (e)=>  setConfirmPassword(e.target.value) }/> */}
//         <div style={{gap:"10px" , justifyContent:"flex-end" , flexDirection:"row"}}>
//           <p>Not Registered?</p>
//           <Link to ={"/register"} style={{textDecoration:"none" , alignItems:"center"}}>Register Now</Link>
//         </div>
//         <div style={{justifyContent:'center', alignItems:"center"}}>
//           <button type='submit'>Login</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Login


import React, { useContext, useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { Context } from '../main';
import { toast } from 'react-toastify';
import "../Pages/login.css";
import axios from 'axios';

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => { 
    e.preventDefault(); // Prevent page reloading 
    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/user/login',
        { email, password, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      ); 
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/"); 
    } catch (error) {
      console.error('Error during login:', error);
      const errorMessage = error.response?.data?.message || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };
  
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container form-component login-form">
      <h2>Sign In</h2>
      <p>Please login to continue</p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ gap: "10px", justifyContent: "flex-end", flexDirection: "row" }}>
          <p>Not Registered?</p>
          <Link to="/register" style={{ textDecoration: "none", alignItems: "center" }}>
            Register Now
          </Link>
        </div>
        <div style={{ justifyContent: 'center', alignItems: "center" }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
