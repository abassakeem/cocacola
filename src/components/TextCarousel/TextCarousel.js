import React, { useState } from 'react'
import "./TextCarousel.css"
import coke from "./../../assets/coke-logo.PNG"
import fanta from "./../../assets/fanta-logo.PNG"
import sprite from "./../../assets/sprite-logo.PNG"
import { Carousel, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TextCarosel(props) {
  const index = props.index
  

  return (
    <div className='vh-100 d-flex text-center align-items-center justify-content-center text-light '>
        <Carousel fade data-bs-theme="dark" interval={null} indicators={false} controls={false} className='fruit-carousel' activeIndex={index} >
      <Carousel.Item>
        <div className=" d-flex  flex-column  text-center align-items-center justify-content-center">
        <div className="logo-image-container">
        <Image src={coke} fluid className='logo-image'/>
        </div>
        <p className='text-center'>Welcome to the home of Coca-Cola Nigeria. Discover our latest news and find nutritional information and ingredients about Coca-Cola's full range of drinks..</p>
       
        </div>
        <a href="#" className='btn btn-light m-3 view-button'>View </a>
        
      </Carousel.Item>
      <Carousel.Item>
        <div className=" d-flex  flex-column text-center align-items-center justify-content-center">
      <div className="logo-image-container">
        <Image src={fanta} fluid className='logo-image'/></div>
        <p className='text-center'>Welcome to the home of Coca-Cola Nigeria. Discover our latest news and find nutritional information and ingredients about Coca-Cola's full range of drinks. </p>
        </div>
        <a href="#" className='btn btn-light m-3 view-button mt-4'>View </a>
        
      </Carousel.Item>
      <Carousel.Item>
        <div className=" d-flex  flex-column text-center align-items-center justify-content-center">
        <div className="logo-image-container">
        <Image src={sprite} fluid className='logo-image'/></div>
        <p className='text-center'>Welcome to the home of Coca-Cola Nigeria. Discover our latest news and find nutritional information and ingredients about Coca-Cola's full range of drinks.</p>
        </div>
        <a href="#" className='btn btn-light m-3 view-button'>View </a>
        
      </Carousel.Item>
     
      
     
    </Carousel>
    </div>
  )
}
