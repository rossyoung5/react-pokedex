import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Screen from "./Screen/Screen";
import TextBox from "./TextBox/TextBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: (Math.floor(Math.random() * 150) + 1)
    };
    this.firstPokemon = this.firstPokemon.bind(this);
    this.nextPokemon = this.nextPokemon.bind(this);
    this.prevPokemon = this.prevPokemon.bind(this);
    this.lastPokemon = this.lastPokemon.bind(this);
  }

  // nextPokemon() {
  //   // console.log(this.props.id)
  //   let newNumber = this.props.number + 1;
  //   return newNumber;
  // }

  // prevPokemon() {
  //   let newNumber = this.props.number - 1;
  //   return newNumber;
  // }

  nextPokemon() {
    // console.log(this.props.number);
    this.setState((prevState) => ({
    // Important: read `prevState` instead of `this.state` when updating.
       id: prevState.id + 1
    }));
  }

  prevPokemon() {
    this.setState((prevState) => ({
    // Important: read `prevState` instead of `this.state` when updating.
      id: prevState.id - 1
    }));
  }

  firstPokemon() {
    this.setState({id: 1})
  }

  lastPokemon() {
    this.setState({id: 151})
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="pokedex-left">
            <div className="blue-light"></div>
            <div className="blue-light-shadow"></div>
            <Screen id={this.state.id}/>
            <div className="buttons">
              <div className="buttons_container">
                <button onClick={this.firstPokemon}></button>
                <button onClick={this.nextPokemon}></button>
                <button onClick={this.prevPokemon}></button>
                <button onClick={this.lastPokemon}></button>
              </div>
            </div>
          </div>
          <div className="pokedex-spine"></div>
          <div className="pokedex-right">
            <TextBox id={this.state.id}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
