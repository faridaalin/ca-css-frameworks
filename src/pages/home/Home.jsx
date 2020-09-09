import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../components/layout/Layout";
import PageHeader from "../../components/header/PageHeader";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import TabsContainer from "../../components/tabs/TabsContainer";
import AccordionContainer from "../../components/accordion/AccordionContainer";
import Paragraph from "../../components/paragraph/Paragraph";

import { IconProviderStyles } from "../../components/accordion/accordion.styles";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Layout>
        <PageHeader>We do YAY things</PageHeader>
        <IconProviderStyles>
        <Row className="mt-4">
          <Col>
            <Paragraph>
              Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper
              mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris
              eleifend finibus et ac orci. Aliquam metus massa, aliquam quis
              arcu sit amet, consectetur faucibus urna. Suspendisse massa diam,
              efficitur eu massa euismod, pretium lacinia magna. Donec mi orci,
              sollicitudin in luctus a, varius eget massa.
            </Paragraph>
          </Col>
        </Row>
          <AccordionContainer />
          <TabsContainer />
        </IconProviderStyles>
      </Layout>
    </>
  );
}
