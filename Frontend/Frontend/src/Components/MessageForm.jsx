import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MessageForm = ({ imageUrl }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // console.log(firstname)

  const handleMessage = async (e) => {
    e.preventDefault();
    console.log(firstname, lastname, phone, email);
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          { firstname, lastname, phone, email, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then(res => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong .Please try again");
    }
  };
  return (
    <>
    <ToastContainer 
        position="top-right" // Ensures toast notifications appear in the top-right corner
        theme="dark"  //light or dark theme
      />
    <div className="update">
      {/* <div className="A-1"></div> */}
      <form onSubmit={handleMessage} className="box"  > 
      <div className="contact-us">
        <div className="getintouch">
          <h1>Get in touch</h1>
          <p>Our team would love to hear you.</p>
        </div>

        <div className="fullname">
          <div className="firstname">
            <p>First Name</p>
            <input
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="lastname">
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="email">
          <p>Email</p>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="phonenumber">
          <p>Phonenumber</p>
          <input
            type="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="message">
          <p>Message</p>
          <textarea
            rows={7}
            placeholder="Type a message to us"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {/* <div className="button"> */}
          <button type="submit">Send</button>
        {/* </div> */}
      </div>
      </form>

      <div className="imgdiv">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  
    </>
  );
};

export default MessageForm;
