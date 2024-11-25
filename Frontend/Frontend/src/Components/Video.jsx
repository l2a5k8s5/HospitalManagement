import React from 'react'
import Hospitalvideo from '../images/Hospitalvideo.mp4';
const Video = ({imageUrl1,imageUrl2,imageUrl3}) => {
  return (
    <div className="video-container">
        <video src={Hospitalvideo} className='video' autoPlay loop muted>       
        </video>
        <div className="video-text">
        <h2>Welcome to Our Hospital</h2>
        <p>We provide the best healthcare services to ensure your well-being. Our team of dedicated professionals is here to offer you top-notch medical care.</p>
        <p>Explore our departments and get to know more about our facilities and services.</p>
      
      <div className='video-text-images'>
            <img src={imageUrl1} alt=""  className='text-image1'/>
             <img src={imageUrl2} alt="" className='text-image2' />
            <img src={imageUrl3} alt=""  className='text-image'/> 
      </div>
      </div>

    </div>
  )
}

export default Video