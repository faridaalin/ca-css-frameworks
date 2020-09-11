import React from "react";
import { NavLink } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Layout from '../layout/Layout';

import {ButtonStyled, FormStyled, NavWrapper} from './nav.styles';



function Navigation() {
  return (
    <NavWrapper>
    <Navbar bg="light" expand="md" className="navigation px-4 py-3">
      <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mt-4 mr-auto mt-md-0 ml-md-5">
            <NavLink className="nav-link activeClassName  mx-n4 my-2 my-md-0 mx-md-0 mr-md-2 pl-5 py-3 py-md-1 pl-md-4" exact to="/">Home</NavLink>
            <NavLink className="nav-link activeClassName  mx-n4 my-2 my-md-0 mx-md-0 mr-md-2 pl-5 py-3 py-md-1 pl-md-4" exact to="/news">News</NavLink>
            <NavLink className="nav-link activeClassName  mx-n4 my-2 my-md-0 mx-md-0 mr-md-2 pl-5 py-3 py-md-1 pl-md-4" exact to="/contact">Contact</NavLink>         
        </Nav>

         <FormStyled>
            <Form.Group className="d-flex w-100">
            <FormControl type="text" placeholder="Search"/>
            <ButtonStyled variant="primary search" className="input-group-prepend">Search</ButtonStyled>
            </Form.Group>
          </FormStyled> 
      </Navbar.Collapse>
    </Navbar>
    </NavWrapper>
  );
}

export default Navigation;