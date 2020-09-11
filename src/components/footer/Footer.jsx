import React from "react";

import { FaVimeoV } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Layout from '../../components/layout/Layout'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FooterStyle, ColStyles, IconProviderStyles} from './footer.styles';


export default function Footer() {
  return (

    <IconProviderStyles>
        <FooterStyle>
          <Layout>
          <Row className="py-md-2">
            <Col xs={12}  md={4} className="d-flex justify-content-center align-items-center mt-2 mb-3 mt-md-0 mb-md-0">
              <ColStyles xs={5} width={140} className="mr-md-auto">
                <FaVimeoV />
                <FaYoutube />
              </ColStyles>
            </Col>

            <ColStyles xs={12} md={8}>
              <a href="mailto:test@test.com">hello@yay.com</a>
              <p className="m-0">Copyright 2020</p>
            </ColStyles>
          </Row>
          </Layout>
        </FooterStyle>
    </IconProviderStyles>
  );
}
