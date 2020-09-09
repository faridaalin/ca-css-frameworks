import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import PageHeader from "../header/PageHeader";

import {
  ItemStyled,
  FormStyle,
  ButtonStyle,
  CheckboxContainer,
} from "./form.styles";
import { IconProviderStyles } from "./form.styles";

import ItemLink from "./Item";
import ContactListGroup from "./ListGroup";

export default function ContactForm() {
  return (
   
      <IconProviderStyles>
        <Row>
          <Col
            xs={12}
            md={5}
            className="order-md-2 d-md-flex justify-content-center mt-md-8"
          >
            <ListGroup className="mt-4">
              <ContactListGroup>
                <MdEmail />
                <ItemLink href="mailto:test@test.com">hello@yay.com</ItemLink>
              </ContactListGroup>

              <ContactListGroup>
                <FaPhone />
                <ItemLink href="tel:1234567890">123 456 7890</ItemLink>
              </ContactListGroup>

              <ContactListGroup className="d-flex pb-0">
                <FaMapMarkerAlt />
                <ItemStyled>123 Some Street</ItemStyled>
              </ContactListGroup>

              <ContactListGroup className="pt-0 pb-0">
                <ItemStyled ml={49}>Somewhere</ItemStyled>
              </ContactListGroup>

              <ContactListGroup className="pt-0 pb-0">
                <ItemStyled ml={49}>Some city</ItemStyled>
              </ContactListGroup>

              <ContactListGroup className="pt-0">
                <ItemStyled ml={49}>10000</ItemStyled>
              </ContactListGroup>
            </ListGroup>
          </Col>

          <Col xs={12} md={7} xl={6} className="order-md-1">
            <PageHeader>Submit your details</PageHeader>
            <FormStyle className="shadow-lg">
              <Col>
                <Form.Label>Name </Form.Label>
                <Form.Control type="name" className="py-4" />
              </Col>

              <Col className="mt-3">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" className="py-4" />
              </Col>
              <Col className="mt-3">
                <Form.Label>Website </Form.Label>
                <div className="d-md-none">
                  <Form.Control className="py-4" />
                </div>

                <div className="d-none d-md-block">
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text className="py-2 px-4">
                        https://
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="py-4" id="inlineFormInputGroup" />
                  </InputGroup>
                </div>
              </Col>

              <Col className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Col>
              <Col className="mt-2">
                
                <CheckboxContainer className="checkboxContainer">
                <label className="label">
                Allow us to sell your personal details to whomever we want
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                </CheckboxContainer>

              </Col>
              <Col>
                <ButtonStyle variant="primary" type="submit">
                  Submit
                </ButtonStyle>
              </Col>
            </FormStyle>
          </Col>
        </Row>
      </IconProviderStyles>
 
  );
}
