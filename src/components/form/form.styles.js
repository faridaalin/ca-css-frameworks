import React from 'react';
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { IconContext } from "react-icons";

export const LinkStyle = styled.a`
  color: ${({ theme }) => theme.colors.bgColor2};
  margin-left: 22px;
`;
export const ItemStyled = styled.p`
  color: ${({ theme }) => theme.colors.bgColor2};
  margin-left: ${({ ml }) => (ml ? ml + "px" : "22px")};
  margin-bottom: 0;
`;
export const FormStyle = styled(Form)`
  background: ${({ theme }) => theme.colors.bgColor3};
  margin-top: 32px;
  margin-left: -24px;
  margin-right: -24px;
  padding-top: 32px;
  padding-bottom: 38px;
  padding-left: 16px;
  padding-right: 16px;
`;
export const ButtonStyle = styled(Button)`
  width:100%;
  margin-top: 32px;
  padding-top: 12px;
  padding-bottom: 12px;
  border:none;
  background-color: ${({ theme }) => theme.colors.bgColor2};

  :hover, :focus {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  `;

export const CheckboxContainer = styled.div`

.label {
  display: block;
  position: relative;
  padding-left: 42px;
  margin-top: 12px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
}

.label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.label input:checked ~ .checkmark:after {
  display: block;
}

.label .checkmark:after {
  left: 10px;
  top: 3px;
  width: 9px;
  height: 18px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
  `;

export const IconProvider = ({ className, children }) => (
  <IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

export const IconProviderStyles = styled(IconProvider)`
  font-size: 2em;
  ${(props) => console.log(props)};
`;