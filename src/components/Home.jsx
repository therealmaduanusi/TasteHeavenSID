import React from 'react'
// import img
import headerBg from "../assets/headerBg.png";
import profile from '../assets/images/profile.png'

// import components
import FoodItem from '../components/FoodItem';
import Sponsors from '../components/Sponsors';
import Taste from '../components/Taste';
import Friday from '../components/Friday';
import FoodCollections from '../components/FoodCollections';
function Home() {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide caro-font">
        <div className="carousel-indicators arrow-indicator">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active caro-img">
                <img src={headerBg} className="d-block w-100" alt="..."/>
                <div className="carousel-caption  d-md-block pb-md-5 mb-lg-5">
                    <h2>Taste the Difference: <span style={{color: '#EA9E3A'}}>Welcome to TASTE HEAVEN</span></h2>
                    <p>
                        Delight your senses with our flavorful dishes, warm atmosphere, and impeccable service. Join us for a memorable dining adventure today.
                    </p>
                    <button className="btn border border-success bg-black text-success me-2">Shop Now</button>
                    <button className="btn bg-success text-white">Learn More</button>
                </div>
            </div>
            <div className="carousel-item  caro-img">
                <img src={headerBg} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-md-block pb-md-5 mb-lg-5">
                    <h2>EVERY BITE <span style={{color: '#EA9E3A'}}>TELLS A STORY</span></h2>
                    <p>
                        From mouthwatering dishes to cozy ambiance, experience the perfect blend of flavors and hospitality. Join us for an unforgettable dining journey.
                    </p>
                    <button className="btn border border-success bg-black text-success me-2">Shop Now</button>
                    <button className="btn bg-success text-white">Learn More</button>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev my-auto ms-md-2" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next my-auto me-md-2" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <FoodItem />
    <Sponsors />
    <Friday />
    <FoodCollections />
    <Taste />   

    {/* Testimony */}
    <div className="container text-center my-5">
        <div className="text">
            <p className='text-success'>What our clients say about us</p>
            <p><b>TESTIMONIAL</b></p>
        </div>
        <div className="person">
            <p>
                “THANK YOU FOR DINNER LAST NIGHT. IT WAS AMAZING!! I HAVE SAY IT’S THE BEST MEAL I HAVE HAD INQUITE SOME TIME. WILL DEFINITELY BE SEEING MORE EATING REGULARLY.”
            </p>
            <div className="img-monial-wrapper">
                <img src={profile} alt="profile testimonial" className='img-fluid'/>
            </div>
            <div className="profiel text">
                <p style={{color: '#EA9E3A'}}>Peter Bowma</p>
                <p><b>Avatech CEO & Co Founder</b></p>
            </div>
        </div>
    </div>

    </>
  )
}

export default Home