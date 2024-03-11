import React from 'react';
import logo from '../assets/TasteHaven_Cafe_logo.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import call from '../assets/call.png';
import search from '../assets/search.png';


function Header() {
  return (
    <>
    <div className="container-fluid">
      <div className="headline-info row">
        <div className="col-4 adding-border pt-3">
          <p><span className='text-success'>100%</span> Secure delivery </p>
        </div>
        <div className="col-4 search adding-border1 pt-3">
          <input type="search" placeholder='Search'/>
          <img src={search} alt="search image" />
        </div>
        <div className="col-4 d-flex adding-border1 pt-3">
          <div className="headline-images">
            <div className="img-headline">
              <img src={call} alt="Call Nuber 08167000077" />
            </div>
            <p>08167000077</p>
          </div>
          <div className="headline-images">
            <div className="img-headlie">
              <img src={facebook} alt="Facebook" />
            </div>
            <p>Taste_heaven</p>
          </div>
          <div className="headline-images">
            <div className="img-headline">
              <img src={instagram} alt="Instagram" />
            </div>
            <p>Taste_heaven</p>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      
      <div className="container">
        <a className="navbar-brand" href="/"><img src={logo} alt="Taste Heaven Logo" style={{width:'3rem'}}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mx-auto">
            <a className="nav-link active text-success" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="/service">Shop</a>
            <a className="nav-link" href="/tracking">About</a>
            <a className="nav-link" href="/contact">Contact</a>
            <a className="nav-link" href="/contact">Cart</a>
        </div>
        <button className="btn border border-success bg-white text-success me-2">Register</button>
        <button className="btn bg-success text-white">Login</button>
        </div>
      </div>
    </nav>
    </div>


    </>
  )
}

export default Header