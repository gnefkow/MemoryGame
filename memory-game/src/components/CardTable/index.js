import React, { Component } from "react";
import "./style.css";
import Card from "../Card";
import Photos from "../Photos";

let keyNumber;
let sampleImage = [{image: "https://images.generated.photos/ww3Ht-Tf6Zh17fJYFQEJeNWcqwUMhVlAVykzQH0Uu90/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAwMDIzOTYuanBn.jpg"}]

class CardTable extends Component {
    state = {
      cards: [
        {
          name: "card 1",
          image: "https://images.generated.photos/ww3Ht-Tf6Zh17fJYFQEJeNWcqwUMhVlAVykzQH0Uu90/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAwMDIzOTYuanBn.jpg"
        }, {
          name: "card 2",
          image: "https://images.generated.photos/ww3Ht-Tf6Zh17fJYFQEJeNWcqwUMhVlAVykzQH0Uu90/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAwMDIzOTYuanBn.jpg"
        }
      ]
    };
  



// createCards = () => {}

  render() {
    return (
      <div className="list-overflow-container">
        <ul className="list-group">Hello world
        {this.state.cards.map(card => {
          return(
            <Card
              image={card.image}
              name={card.name}
            />
          )
        })}
        </ul>
    </div>
    
    )
  }
}

export default CardTable


