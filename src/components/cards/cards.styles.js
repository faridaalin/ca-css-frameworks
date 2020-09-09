import styled from 'styled-components' ;
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import {BgImgStyles} from "../../css/defaultStyles";


export const CardStyled = styled(Card)`
border-radius: 10px;
`;



export const ResponsiveBgImg = styled.div`
  ${BgImgStyles};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ButtonStyle = styled(Button)`
  width: 100%;
  margin-top: 1em;
  border: none;
  text-transform: uppercase;
  position: relative;

    :after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 10%;
    height: 100%;
    background: ${({theme}) => theme.colors.bgColor2};
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;

  }
 
`;