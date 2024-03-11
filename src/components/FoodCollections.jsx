import React from 'react'
import img1 from '../assets/images/pizza.png';
import img2 from '../assets/images/shawama.png';
import img3 from '../assets/images/fried-chicken.png';
import img4 from '../assets/images/fried-chips.png';
import img5 from '../assets/images/hamburger.png';
import img6 from '../assets/images/chicken-biryani.png';
import img7 from '../assets/images/pasta.png';
import img8 from '../assets/images/fried-chips.png';

import love from '../assets/images/loveIcon.png';
import fullStar from '../assets/images/Fullstar.png';
import star from '../assets/images/star.png'


function FoodCollections() {

    const foodCategories = [
        {pic: img1, caption: 'Pepperoni Pizza'},
        {pic: img2, caption: 'Patato Chip'},
        {pic: img3, caption: 'Cheese Burger'},
        {pic: img4, caption: 'Grilled Chicken'}
    ];
    const foodCategories2 = [
        {pic: img5, caption: 'Grilled Chicken'},
        {pic: img6, caption: 'Grilled Chicken'},
        {pic: img7, caption: 'Grilled Chicken'},
        {pic: img8, caption: 'Grilled Chicken'}
    ]

    const rateFood = {
        heart: love,
        fullRate: fullStar,
        noRate: star
    }
  return (
    <>
    <div className="container-fluid">
        <div className="container">
            <div className="text-center mb-4">
                <p className="text-success">CRISPY, EVERY BITE TASTE</p>
                <h4>POPULAR FOOD ITEMS</h4>
            </div>

            <div className="row">

                {foodCategories.map((foodCategory, index) =>(
                    <div className="food-items col-lg-3 col-md-6 col-sm-6" key={index}>
                        <div className="Fastfood-btn">
                            <div className="fastFoods">
                                <div className="foods mx-auto">
                                    <img src={foodCategory.pic} alt="Food items"  className='img-fluid'/>
                                </div>
                                <div className="love">
                                    <img src={rateFood.heart} alt="Love" className='img-fluid'/>
                                </div>
                            </div>
                            <button style={{width: '10rem'}} className='btn btn-secondary mx-auto display-btn'>Add To Chart</button>
                        </div>


                        <div className="text pt-3">
                            <span>Beef Shawarma</span>

                            <div className="img-rating">
                                <img src={rateFood.fullRate} alt="Ratings" className='img-fluid'/>
                                <img src={rateFood.fullRate} alt="Ratings" className='img-fluid'/>
                                <img src={rateFood.fullRate} alt="Ratings" className='img-fluid'/>
                                <img src={rateFood.fullRate} alt="Ratings" className='img-fluid'/>
                                <img src={rateFood.noRate} alt="Ratings" className='img-fluid'/>
                            </div>
                            <p>$30.52 <span style={{textDecoration: 'line-through', fontSize: '12px'}}>$38.52</span></p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row my-2">
                {foodCategories2.map((foodCategory, index) =>(
                    <div className="food-items col-lg-3 col-md-6 col-sm-6" key={index}>
                        <div className="Fastfood-btn">
                            <div className="fastFoods">
                                <img src={foodCategory.pic} alt=""  className='img-fluid'/>
                                <div className="love">
                                    <img src={rateFood.heart} alt="" />
                                </div>
                            </div>
                            <button style={{width: '10rem'}} className='btn btn-secondary mx-auto display-btn'>Add To Chart</button>
                        </div>
                        <div className="text pt-3">
                            <span>Beef Shawarma</span>

                            <div className="img-rating">
                                <img src={rateFood.fullRate} alt="Ratings" />
                                <img src={rateFood.fullRate} alt="Ratings" />
                                <img src={rateFood.fullRate} alt="Ratings" />
                                <img src={rateFood.fullRate} alt="Ratings" />
                                <img src={rateFood.noRate} alt="Ratings" />
                            </div>
                            <p>$30.52 <span style={{textDecoration: 'line-through', fontSize: '12px'}}>$38.52</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default FoodCollections