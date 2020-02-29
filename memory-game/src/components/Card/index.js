import React from "react";
import "./style.css";
import { PromiseProvider } from "mongoose";
import { Container, Row, Col } from "../Grid";




function Card({
  image = "https://placehold.it/300x300",
  clicked = false
}) {
  return (
    <li className="memCard">
      <Container>
        <Row>
          <Col size="xs-2 sm-2">
            <img src={image}/>
           </Col>
        </Row>
      </Container>
    </li>
  )
}

export default Card;