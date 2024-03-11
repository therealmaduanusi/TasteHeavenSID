import React from 'react'
import img  from '../assets/beef.png'

export default function Friday() {
  return (
    <>
    <div className="bg-img p-5 my-5 text-white">
        <div className="container  d-md-flex justify-content-between align-items-center">
            <div className="content-deal">
                <p>🔥🎉 BLACK FRIDAY SPECIAL! SAVE 20% TODAY ONLY! 🔥🎉</p>
                <h4>A Sizzling Deal <span style={{color: '#EA9E3A'}}>You Can't</span> Miss!</h4>
                <p>GRILLED CHIKEN $59,00</p>
                <button className='btn btn-success text-white'>Order Now</button>
            </div>
            <div className="img-deal">
                <img src={img} alt="beef" className='img-fluid' />
            </div>
        </div>
    </div>
    </>
  )
}
