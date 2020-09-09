import React from "react";
import bgImg from "../../img/carousel.png";

import Carousel from "react-bootstrap/Carousel";
import {CarouselStyles, CarouselStylesImg} from './Banner.styles'

export default function HeroBanner() {
  return (
    <CarouselStyles interval={null}>
      <Carousel.Item><CarouselStylesImg img={bgImg} className="embed-responsive embed-responsive-16by9" /></Carousel.Item>
      <Carousel.Item><CarouselStylesImg img={bgImg} className="embed-responsive embed-responsive-16by9" /></Carousel.Item>
      <Carousel.Item><CarouselStylesImg img={bgImg} className="embed-responsive embed-responsive-16by9" /></Carousel.Item>
    </CarouselStyles>
  );
}
