import React, { Component } from "react";
import "./style.css";
import Card from "../Card";
import Photos from "../Photos.json";
import { Container, Row, Col } from "../Grid";



class CardTable extends Component {
    state = {
      Photos,
      correctGuesses: 0,
      guessesLeft: 10
    };
  

handleCardClick = name => {
  
  const thisCard = this.state.Photos.filter(card => card.name == name);
  let i = thisCard[0].index;
  
  let determineGuess = Photos[i].clicked ? guessedWrong : guessedRight;
  const increaseScore = () => this.setState({ correctGuesses: this.state.correctGuesses + 1 })
  const decreaseGuesses = () => this.setState({ guessesLeft: this.state.guessesLeft - 1 })
  determineGuess();
  // checkScore();
  // function announcer(){console.log(`There are ${this.state.correctGuesses} correct guesses and ${this.state.guessesLeft} guesses left`)}
  
  function guessedRight(){
    increaseScore();
    Photos[i].clicked = true;
    Photos[i].clickState = "Clicked!";
    console.log("Correct!")
    // correctGuesses = 99;
    // announcer();
  }

  function guessedWrong(){
    decreaseGuesses();
    
    // announcer();
    console.log("Already selected this one!");
  }

  // function checkScore(){
  //   let cardsLeft = Photos.length;
  //   for (var j = 0; Photos.length; j++){
  //     if (Photos[j].clicked){ cardsLeft-- };
  //   }
  //   console.log(cardsLeft);
  // }
  
  console.log(`Correct: ${this.state.correctGuesses}    ||    Guesses Left: ${this.state.guessesLeft}`)
  console.log(Photos)


};




  render() {
    return (
      <div className="list-overflow-container">
        <h1>Open the console to see what is happening</h1>
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


