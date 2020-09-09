import React from "react";

import Layout from "../layout/Layout";
import StyledParagraph from '../paragraph/Paragraph'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { StyledAnchorTag } from '../accordion/accordion.styles'
import {ResponsiveBgImg} from "../../css/defaultStyles";


export default function HomeTabs() {
    return (
        <div className="d-none d-md-block mt-5">
        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="border-bottom-0">
          <Tab eventKey="first" title="First">
            <Layout>
              <Row>
                <Col md={4}>
                  <div>
                    <ResponsiveBgImg className="embed-responsive embed-responsive-4by3"></ResponsiveBgImg>
                  </div>
                </Col>
                <Col md={8}>
                  <StyledParagraph>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non
                    eleifend justo, a ullamcorper turpis. Cras vehicula
                    pharetra lectus non maximus. Sed condimentum mattis
                    rhoncus.{" "}
                  </StyledParagraph>
                  <div className="d-flex align-items-center">
                    <StyledAnchorTag href="/">Share</StyledAnchorTag>
                    <FaFacebookF />
                    <FaTwitter />
                  </div>
                </Col>
              </Row>
            </Layout>
          </Tab>
          <Tab eventKey="second" title="Second">
            <StyledParagraph>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
              Sed condimentum mattis rhoncus.{" "}
            </StyledParagraph>
          </Tab>
          <Tab eventKey="third" title="Third">
            <StyledParagraph>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
              Sed condimentum mattis rhoncus.{" "}
            </StyledParagraph>
          </Tab>
        </Tabs>
      </div>
    )
}
