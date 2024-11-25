import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p></p>
        <h3>Let's Introduce Ourselves</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat corporis eaque molestiae, iste a aliquam minima in iure 
          expedita assumenda accusantium corrupti, ex deserunt? Ea tempore quia vero vel laudantium.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis necessitatibus</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus vel ad, exce</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aperiam sint mollitia vero, sequi qui et nemo eum dolores eaque fugiat, consequatur repellat enim voluptates nisi repellendus quidem perferendis architecto!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id soluta accusantium eum provident magnam, ad alias, quis, quibusdam beatae quisquam atque quia exercitationem ipsam! Quidem cul</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ea nulla officia inventore consectetur laudantium assumenda dicta sit! Laudantium animi eligendi perspiciatis aspernatur quo ipsam no</p>
      </div>
    </div>
  )
}

export default Biography;