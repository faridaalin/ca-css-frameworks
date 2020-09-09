import React from "react";

import CardGroup from "react-bootstrap/CardGroup";
import {CardContainer, ColContainer} from "../../components/cards/Card";
import Row from "react-bootstrap/Row";

import PageHeader from "../../components/header/PageHeader";
import Pagination from "../../components/pagination/Pagination";
import Layout from "../../components/layout/Layout";
import {
  News1,
  News2,
  News3,
  News4,
  News5,
  News6,
  News7,
  News8,
} from "../../img/imgAssets";

export default function News() {
  return (
    <Layout>
      <PageHeader>News</PageHeader>
      <Pagination />
      <CardGroup>
        <Row>
        <ColContainer>
        <CardContainer
            img={News1}
            cardTitle={"Nunc porttitor vel"}
            cardText={"Nunc malesuada eget est fringilla dapibus."}
            btnText={"More"} />
        </ColContainer>
        <ColContainer>
        <CardContainer
            img={News2}
            cardTitle={"Nunc porttitor vel"}
            cardText={"Nunc malesuada eget est fringilla dapibus."}
            btnText={"More"} />
        </ColContainer>
        <ColContainer>
        <CardContainer
            img={News3}
            cardTitle={"Nunc porttitor vel"}
            cardText={"Nunc malesuada eget est fringilla dapibus."}
            btnText={"More"} />
        </ColContainer>
        <ColContainer>
        <CardContainer
            img={News4}
            cardTitle={"Nunc porttitor vel"}
            cardText={"Nunc malesuada eget est fringilla dapibus."}
            btnText={"More"} />
        </ColContainer>
        <ColContainer>
        <CardContainer
            img={News5}
            cardTitle={"Nunc porttitor vel"}
            cardText={"Nunc malesuada eget est fringilla dapibus."}
            btnText={"More"} />
        </ColContainer>
        
        <ColContainer>
        <CardContainer
            img={News6}
            cardTitle={"Nunc porttitor vel"}
            cardText={"Nunc malesuada eget est fringilla dapibus."}
            btnText={"More"} />
        </ColContainer>
                
        <ColContainer>
        <CardContainer
            img={News7}
            cardTitle={"Nunc porttitor vel"}
            cardText={"Nunc malesuada eget est fringilla dapibus."}
            btnText={"More"} />
        </ColContainer>
                
        <ColContainer>
        <CardContainer
            img={News8}
            cardTitle={"Nunc porttitor vel"}
            cardText={"Nunc malesuada eget est fringilla dapibus."}
            btnText={"More"} />
        </ColContainer>


  
        </Row>
      </CardGroup>
      <Pagination />
    </Layout>
  );
}
