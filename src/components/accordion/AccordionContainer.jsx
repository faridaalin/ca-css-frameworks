import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { StyledButtonLink, StyledAnchorTag } from './accordion.styles'
import {ResponsiveBgImg} from "../../css/defaultStyles";


export default function AccordionContainer() {
  return (
    <div className="mt-5 d-md-none">
      <Accordion defaultActiveKey="0" className=" shadow-sm">
        <Card className="border-0">
          <Card.Header>
            <Accordion.Toggle as={StyledButtonLink} variant="link" eventKey="0">
              First
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card className="rounded-0">
              <Card.Body>
                <Card.Text>
                  Morbi eget efficitur turpis. Vivamus pellentesque tortor
                  massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                  justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
                  maximus. Sed condimentum mattis rhoncus.
                </Card.Text>
                <ResponsiveBgImg className="embed-responsive embed-responsive-4by3"></ResponsiveBgImg>

                <div className="d-flex align-items-center justify-content-center mt-3">
                  <StyledAnchorTag href="/">Share</StyledAnchorTag>
                  <FaFacebookF />
                  <FaTwitter />
                </div>
              </Card.Body>
            </Card>
          </Accordion.Collapse>
        </Card>

        <Card bg="light">
          <Card.Header bg="light">
            <Accordion.Toggle as={StyledButtonLink} variant="link" eventKey="1">
              Second
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              H Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="border-bottom-0">
            <Accordion.Toggle as={StyledButtonLink} variant="link" eventKey="2">
              Third
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              {" "}
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
