import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { IconContext } from "react-icons";


export const StyledButtonLink = styled(Button)`
  font-size: 19px;
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
