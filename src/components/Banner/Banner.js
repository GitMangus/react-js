import React from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
  return (
    <Carousel className="banner">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/banners/banner.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/banners/banner2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/banners/banner3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>     
  )
}

export default Banner




