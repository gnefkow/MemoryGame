import React, { Component } from "react";
import "./style.css";
import Card from "../Card";
import Photos from "../Photos.json";



class CardTable extends Component {
    state = {
      Photos
    };
  

handleClickEvent = () =>{
  // this.setState({clicked: true, clickState: "Clicked!"})
  alert(`Clicked ${this}!!!`)
}

// createCards = () => {}

  render() {
    return (
      <div className="list-overflow-container">
        <ul className="list-group">
        {this.state.Photos.map(card => {
          return(
            <div onClick={this.handleClickEvent}>
            <Card
              image={card.image}
              name={card.name}
              clicked={card.clicked}
              key={card.key}
              clickState={card.clickState}
            />
            </div>
          )
        })}
        </ul>
    </div>
    
    )
  }
}

export default CardTable


