import React from "react";
import { IconContext } from "react-icons";
import styled from "styled-components";
import Col from "react-bootstrap/Col";

export const FooterStyle = styled.footer`
  margin-top: 176px;
  padding-top: 45px;
  padding-bottom: 31px;
  justify-content: space-between;
  flex-shrink: 0;
  background: ${({theme}) => theme.colors.bgColor1};

  @media ${(props) => props.theme.mediaQueries.md} {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const ColStyles = styled(Col)`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  font-weight: ${(props) => props.theme.fontWeight.light};
  max-width: ${({ width }) => width ? width + "px" : "inheret"};

  a {
    color: ${(props) => props.theme.colors.bgColor2}; 
  }
`;

export const IconProvider = ({ className, children}) => <IconContext.Provider value={{ className }}>{children}</IconContext.Provider>;

export const IconProviderStyles = styled(IconProvider)`
font-size: 3em;
width: 40%;

@media ${(props) => props.theme.mediaQueries.md} {
  font-size: 2em;
}
 `;