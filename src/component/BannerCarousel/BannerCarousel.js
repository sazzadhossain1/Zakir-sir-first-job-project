import React from "react";
import "./BannerCarousel.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerOne from "../../images/bannerPhoto/bannerOne.jpg";
import bannerTwo from "../../images/bannerPhoto/bannerTwo.jpg";
import bannerThree from "../../images/bannerPhoto/bannerThree.jpg";
const BannerCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Auto-play interval in ms
    nextArrow: <SampleNextArrow />, // Custom right arrow
    prevArrow: <SamplePrevArrow />, // Custom left arrow
  };

  const photos = [
    { id: 1, url: bannerOne },
    { id: 2, url: bannerTwo },
    { id: 3, url: bannerThree },
  ];
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.url}
              alt={`Slide ${photo.id}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
// Custom Right Arrow
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      ❯
    </div>
  );
};

// Custom Left Arrow
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      ❮
    </div>
  );
};
export default BannerCarousel;
