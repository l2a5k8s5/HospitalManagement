import React from 'react';
import Hero from '../Components/Hero';
// import Biography from '../Components/Biography';
import Departments from '../Components/Departments';
import MessageForm from '../Components/MessageForm';
import Video from '../Components/Video';
import Footer from '../Components/Footer';
import "./Home.css"

const Home = () => {
  return (
    <>
      <Hero  title={ "YOUR MOST TRUSTED HEALTHCARE PARTNER"}  ></Hero>
      <Video imageUrl1={"/about-nabh.png"} imageUrl2={"/Ayushman.png"} imageUrl3={"/healthInsurance.png"}/>
      <Departments/>
      {/* <Service/> */}
      <MessageForm imageUrl={"/Contactus.webp"}/>
      <Footer/>
    </>
  )
};
export default Home;