import styled from "styled-components";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const ButtonStyled = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const NavWrapper = styled.div`
background-color: #f8f9fa;
  .navigation {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 43px;

  @media ${(props) => props.theme.mediaQueries.above526} {
    max-width: 300px;
  }

  @media ${(props) => props.theme.mediaQueries.above768} {
    margin-top: 0;
    margin-bottom: 0;

    .form-group {
      margin-bottom: 0;
    }
  }
`;
