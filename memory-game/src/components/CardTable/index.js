import React, { Component } from "react";
import "./style.css";
import Card from "../Card";
import Photos from "../Photos.json";
import { Container, Row, Col } from "../Grid";



class CardTable extends Component {
    state = {
      Photos
    };
  

handleCardClick = name => {
  const thisCard = this.state.Photos.filter(card => card.name == name);
  let i = thisCard[0].index;
  
  

  function guessedRight(){
    Photos[i].clicked = true;
    Photos[i].clickState = "Clicked!";
    alert("Good Job");
  }
  function guessedWrong(){
    alert("Already selected this one!");
  }
  let determineGuess = Photos[i].clicked ?  guessedWrong : guessedRight;
  determineGuess();
  

  
  
//   if (Photos[i].clicked == true){
//     alert("Already selected this one!")
//   } else {
//   Photos[i].clicked = true;
//   Photos[i].clickState = "Clicked!";
//   console.log(Photos[i])
// }
};

  render() {
    return (
      <div className="list-overflow-container">
        <Container>
          <Row>
            {this.state.Photos.map(card => (
                <Card
                  handleCardClick={this.handleCardClick}
                  image={card.image}
                  name={card.name}
                  clicked={card.clicked}
                  key={card.key}
                  clickState={card.clickState}
                />
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

export default CardTable


