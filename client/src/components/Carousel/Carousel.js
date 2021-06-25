import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/Carousel1.jpg";
import img2 from "../../assets/images/Carousel2.jpg";
import img3 from "../../assets/images/Carousel4.jpg";

import "./Carousel.scss";

export function CarouselFunc() {
  return (
    <Carousel
      className="main"
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      stopOnHover={false}
    >
      <div className="image">
        <img src={img1} alt="pics" />
      </div>
      <div className="image">
        <img src={img2} alt="pics" />
      </div>
      <div className="image">
        <img src={img3} alt="pics" />
      </div>
    </Carousel>
  );
}
