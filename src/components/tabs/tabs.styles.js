import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { IconContext } from "react-icons";


import img from "../../img/Accordion-image.png";
import BgImgStyles from "../../css/defaultStyles";

export const StyledButtonLink = styled(Button)`
  font-size: 19px;
`;

export const ResponsiveBgImg = styled.div`
  ${BgImgStyles};
  background-image: url("${img}");
`;

export const StyledParagraph = styled.p`
line-height: 1.8;
`;

export const StyledAnchorTag = styled.a`
color: #0A0A0A;
text-transform: uppercase;
padding-right: 8px;
font-weight: ${({ theme }) => theme.fontWeight.medium}
`;

export const IconProvider = ({ className, children}) => <IconContext.Provider value={{ className }}>{children}</IconContext.Provider>;

export const IconProviderStyles = styled(IconProvider)`
margin-right: 8px;
color: #0A0A0A;
font-size: 1.5em;
 `;
