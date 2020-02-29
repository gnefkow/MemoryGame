import React from "react";
import "./style.css";
import { PromiseProvider } from "mongoose";
import { Container, Row, Col } from "../Grid";




function Card({
  image = "https://placehold.it/300x300",
  clicked,
  name,
  clickState
}) {
  return (
    <li className="memCard" data-name={name}>
      <Container>
        <Row>
          <Col size="xs-2 sm-2">
              <h1>{name}</h1>
              <p>{clickState}</p>
              <img src={image}/>
           </Col>
        </Row>
      </Container>
    </li>
  )
}

export default Card;