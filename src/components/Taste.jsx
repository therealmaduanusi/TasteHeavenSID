import React from 'react'
import img from '../assets/images/coke_fries.png'
function Taste() {
  return (
    <>
    <div className="container-fluid bg-white my-5 py-3">
        <div className="row">
            <div className="img-container col-md-6">
                <img src={img} alt="Coke and Fries" className='img-fluid' />
            </div>
            <div className="coke-fries-text align-self-center text-center col-md-6 mt-sm-3">
                <p className='text-success'>CRISPY, EVERY BITE TASTE</p>
                <h5>TASTE HEAVEN CHIKEN HOT WING & FRENCH FRIES</h5>
                <button className='btn btn-success'>Order</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Taste