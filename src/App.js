import React, { Component } from 'react';
import logo from './logo.svg';
import Card from "./makeItPretty/dogCards";
import Wrapper from "./makeItPretty/wrapper";
import Header from "./makeItPretty";
import cards from "./dogs.json";
import "./App.css";


// from react app
class App extends Component {
  state = {
    cards,
    score: 0,
    streak: 0
  };

  // end the game when 
  gameEnd = () => {
    if (this.state.score > this.state.streak) {
      this.setState({ streak: this.state.score }, function () {
        console.log("yYour highschore is " this.state.streak);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert("Ooopsies: ${this.state.score}");
    this.setState({ score: 0 });
    return true;
  }

  // track if card has been clicked or not
  // increment by +1 or reset game
  clickCounter = id => {
    this.state.cards.find((obj, i) => {
      if (obj.id === id) {
        if (cards[i].count === 0) {
          // add 1 if not clicked
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          // shuffle the array to yield random result
          // because I don't know how to array
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        }

        else {
          this.gameOver();
        }
      }
    });
  }

  // map the cards and render the components for the dog.json card objects
  // from react

  render() {
    return (
      // create the wrapper xml
      // can't comment within the xml code
      <Wrapper>
        <Header score={this.state.score} streak={this.state.streak}>Click All The Dogs!!</Header>
        {this.state.cards.map(card => (
          < Card
            clickCount={this.clickCount}
            id = {card.id}
            key = {card.id}
            image = {card.image} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
