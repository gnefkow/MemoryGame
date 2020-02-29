import React from "react";
import "./style.css";
import { PromiseProvider } from "mongoose";
import { Container, Row, Col } from "../Grid";




function Card(props) {
  return (
    <li 
        className="memCard" 
        data-name={props.name}
        onClick={() => props.handleCardClick(props.name)}
      >
      <Container>
        <Row>
          <Col size="xs-2 sm-2">
              <h1>{props.name}</h1>
              <p>{props.clickState}</p>
              <img src={props.image}/>
           </Col>
        </Row>
      </Container>
    </li>
  )
}

export default Card;