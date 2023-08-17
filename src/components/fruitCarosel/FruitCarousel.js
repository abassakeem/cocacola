import React, { useState } from 'react'
import "./FruitCarousel.css"
import coke from "./../../assets/kola.jpg"
import fanta from "./../../assets/orange.jpg"
import sprite from "./../../assets//lemon-lime.webp"
import { Button, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FruitCarosel(props) {
  

  const index = props.index

  
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };


  // const onNextClick = () => {
  //   if (index === 2) {
  //     setIndex(0);
  //   } else if (index === 0 || index > 0) setIndex(index + 1);
  // };

  
 
  return (
   
    <div className=' d-flex align-items-center justify-content-center entire-fruit-carosel'>
        
        <Carousel controls={false} indicators={false} interval={null} data-bs-theme="dark" className='fruit-carousel' fade activeIndex={index} >
      <Carousel.Item>
        <div className="fruit-image-container d-flex text-center align-items-center justify-content-center">
        <img
          className=" fruit-image fruit-image-1 fluid"
          src={coke}
          alt="First slide"
        />
        
        </div>
        
      </Carousel.Item>
      <Carousel.Item >
        <div className="fruit-image-container d-flex text-center align-items-center justify-content-center">
        <img
          className="  fruit-image fruit-image-2 fluid"
          src={fanta}
          alt="Second slide"
        />
        </div>
       
      </Carousel.Item>
      <Carousel.Item>
        <div className="fruit-image-container d-flex text-center align-items-center justify-content-center">
        <img
          className=" fruit-image fruit-image-3 fluid"
          src={sprite}
          alt="Third slide"
        />
        
        </div>
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
