import React from 'react'

import pic1 from '../assets/images/02.png'
import pic2 from '../assets/images/01.png'
import pic3 from '../assets/images/03.png'
import pic4 from '../assets/images/04.png'
import pic5 from '../assets/images/05.png'
import pic6 from '../assets/images/06.png'

function Sponsors() {
  return (
    <>
    <div className="container mt-5">
        <h6 className='text-success mb-3'>HAPPY SPONSORS WITH US</h6>
        <div className="img-wrapper d-flex justify-content-between align-items-center">
            <div className="img-container">
                <img src={pic1} alt="Chicken" className='img-fluid' />
            </div>
            <div className="img-container">
                <img src={pic2} alt="Pizza Resturant" className='img-fluid' />
            </div>
            <div className="img-container">
                <img src={pic3} alt="Cook Tv Channel" className='img-fluid' />
            </div>
            <div className="img-container">
                <img src={pic4} alt="Banquet Taglinegoes Here" className='img-fluid' />
            </div>
            <div className="img-container">
                <img src={pic6} alt="Cafe" className='img-fluid' />
            </div>
            <div className="img-container">
                <img src={pic5} alt="Resturant" className='img-fluid' />
            </div>
        </div>

    </div>
    </>
  )
}

export default Sponsors