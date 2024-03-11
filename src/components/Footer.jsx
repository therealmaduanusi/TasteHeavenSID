import React from 'react'
import footerLogo from '../assets/TasteHaven_Cafe_logo.png'
import googlePlay from '../assets/google-play.png';
import appStore from '../assets/app-store.png'
function Footer() {
  return (
    <>
    <div className="container">
        <div className="container-fluid row">
            <div className="footer col-lg-3 col-md-6">
                <div className="footerimg">
                    <img src={footerLogo} alt="footer Logo"  className='img-fluid' style={{width: '3rem'}}/>
                </div>
                <div className="footer-content">
                    <p>We believe it has the power to do amazing things.</p>
                    <p>Interested in working with us?</p>
                    <p><a href="mailto:info@example.com"><b>info@example.com</b></a></p>
                </div>
            </div>
            <div className="footer col-lg-3 col-md-6">
                <h5>Quick Links</h5>
                <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Latest Food</a></li>
                    <li><a href="#">My Account</a></li>
                </ul>
            </div>
            <div className="footer col-lg-3 col-md-6">
                <h5>Address</h5>
                <p>570 8th Ave, New York, NY 10018 United States</p>
                <h5>Hours:</h5>
                <p>9.30am - 6.30pm</p>
                <p>Monday To Friday</p>
            </div>
            <div className="footer col-lg-3 col-md-6">
                <h5>Install App</h5>
                <p>FROM APP STORE OR GOOGLE PLAY</p>
                <div className="download d-flex align-items-center">
                    <div className="apple">
                        <a href="#"><img src={appStore} alt="Apple store" className='img-fluid' /></a>
                    </div>
                    <div className="playstore">
                        <a href="#"><img src={googlePlay} alt="Google play" className='img-fluid' /></a>
                    </div>
                </div>
            </div>
            <p className='text-center pt-3'>© Copyright 2024 Taste Heaven. All Rights Reserved.</p>
        </div>
    </div>

    </>
  )
}

export default Footer