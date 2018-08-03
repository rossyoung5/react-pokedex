import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Screen from "./Screen/Screen";
import TextBox from "./TextBox/TextBox";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="pokedex-left">
            <Screen />
          </div>
          <div className="pokedex-right">
            <TextBox />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
