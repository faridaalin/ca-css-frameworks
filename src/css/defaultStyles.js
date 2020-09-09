import styled, { css } from 'styled-components';
import img from "../../src/img/Accordion-image.png";

export const BgImgStyles = css`
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

export const ResponsiveBgImg = styled.div`
  ${BgImgStyles};
  background-image: url("${img}");
`;