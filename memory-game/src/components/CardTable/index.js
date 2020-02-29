import React, { Component } from "react";
import "./style.css";
import Card from "../Card";
import Photos from "../Photos.json";



class CardTable extends Component {
    state = {
      Photos
    };
  

handleCardClick = name => {
  // this.setState({clicked: true, clickState: "Clicked!"})
  alert(`Clicked ${name}!!!`)
  const thisCard = this.state.Photos.filter(card => card.name == name);
  let thisCardClicked = thisCard[0].clicked;
  let thisCardClickState = thisCard[0].clickState;
  let thisCardIndex = thisCard[0].index;
  console.log(`first, thisCard's clicked is ${thisCardClicked}
                and thisCard's clickstate is ${thisCardClickState}`)
  Photos[thisCardIndex].clicked = true;
  thisCardClickState = "Clicked!";
  console.log(`then, thisCard's clicked is ${thisCardClicked}
                and thisCard's clickstate is ${thisCardClickState}`)
  console.log(Photos)
};

  render() {
    return (
      <div className="list-overflow-container">
        <ul className="list-group">
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
        </ul>
    </div>
    
    )
  }
}

export default CardTable


