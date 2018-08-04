import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Screen from "./Screen/Screen";
import TextBox from "./TextBox/TextBox";
class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 15
    };

    this.nextPokemon = this.nextPokemon.bind(this);
    this.prevPokemon = this.prevPokemon.bind(this);
  }

  nextPokemon() {
    this.setState((prevState) => {
    // Important: read `prevState` instead of `this.state` when updating.
    return {id: prevState.id + 1}
  });
  }

  prevPokemon() {
    this.setState((prevState) => {
    // Important: read `prevState` instead of `this.state` when updating.
    return {id: prevState.id - 1}
  });
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="pokedex-left">
            <Screen id={this.state.id}/>
            <button onClick={this.prevPokemon}>Prev</button>
            <button onClick={this.nextPokemon}>Next</button>
          </div>
          <div className="pokedex-right">
            <TextBox id={this.state.id}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
