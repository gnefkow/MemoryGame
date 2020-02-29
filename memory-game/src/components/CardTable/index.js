import React, { Component } from "react";
import "./style.css";
import Card from "../Card";
import Photos from "../Photos.json";



class CardTable extends Component {
    state = {
      Photos
    };
  

handleCardClick = name => {
  this.setState({clicked: true, clickState: "Clicked!"})
  alert(`Clicked ${name}!!!`)
  // alert(`The state is now ${clickState}`)

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


