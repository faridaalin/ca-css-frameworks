import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { ResponsiveBgImg, ButtonStyle, CardStyled } from "./cards.styles";

export  function ColContainer({ children }) {
  return (
    <Col sm={12} md={6} lg={4} xl={3} className="mt-4 mb-4">
      {children}
    </Col>

  );
}


export function CardContainer({ img, cardTitle, cardText, btnText }) {
  return (
    <CardStyled>
      <ResponsiveBgImg
        style={{ backgroundImage: `url(${img})` }}
        className="embed-responsive embed-responsive-4by3"
      />
      <Card.Body>
        <Card.Title variant="card-title">{cardTitle}</Card.Title>
        <Card.Text className="text">{cardText}</Card.Text>
        <ButtonStyle>{btnText}</ButtonStyle>
      </Card.Body>
    </CardStyled>
  );
}


