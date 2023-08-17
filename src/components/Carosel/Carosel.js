import React, { useState } from 'react'
import "./Carosel.css"
import coke from "./../../assets/Image (3).png"
import fanta from "./../../assets/Image (4).png"
import sprite from "./../../assets/Image (5).png"
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carosel(props) {
  const index = props.index
  
  
  return (
    <div>
        <Carousel controls={false} interval={null} indicators={false} data-bs-theme="dark" className='coke-carouse text-center' activeIndex={index} >
      <Carousel.Item>
        <div className="image-container d-flex text-center vh-100 align-items-center justify-content-center">
        <img
          className="d-block vh-100  bottle"
          src={coke}
          alt="First slide"
        />
        </div>
        
      </Carousel.Item>
      <Carousel.Item >
        <div className="image-container d-flex text-center align-items-center justify-content-center">
        <img
          className="vh-100 d-block bottle"
          src={fanta}
          alt="Second slide"
        />
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container d-flex text-center align-items-center justify-content-center">
        <img
          className=" vh-100 d-block bottle"
          src={sprite}
          alt="Third slide"
        />
        </div>
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
