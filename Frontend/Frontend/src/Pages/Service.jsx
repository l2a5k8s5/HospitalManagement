import React from 'react'

import img from '../images/baby.png';
import { Link } from 'react-router-dom'

const Service = () => {
    const weArePleaseStyle = {
        backgroundColor: "antiquewhite",
        height: "60vh",
        backgroundImage: `url('/images/doctors-bg.jpg')`, // Correct syntax
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat', // Moved from `background`
        backgroundSize: 'cover',
        padding: "10px",
        position: "relative",
        marginTop: 200,
        // marginBottom: 100
      };
      
  return (
    <>
      {/* <Header /> */}
      <SubHeader title="Service" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing." />

      {/* <div className="container" style={{ marginTop: 200, marginBottom: 100 }}>
        <div className="row">
          {
            Array(6).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className=" shadow border-0 mb-5">
                  <img src={img} alt="" className="img-fluid" style={{ maxHeight: '17rem', maxWidth:'17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Child care</h4>
                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div> */}

      <section style={weArePleaseStyle}>
        <div className="container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div className="row">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <div className='mb-4 section-title text-center'>
                  <h2 className='text-uppercase'>We are pleased to offer you the</h2>
                  <p className='form-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.</p>
                  <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Service