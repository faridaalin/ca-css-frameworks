import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

export const CarouselStyles = styled(Carousel)`
  .carousel-indicators {

  }
  .carousel-indicators > li {
    height: 30px;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 2px;
  
    border-bottom: none;
    border-top: none;
  }

  .carousel-indicators .active {
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const CarouselStylesImg = styled.div`
  
    background-image: url(${({img}) => img});
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 500px;
  
`;