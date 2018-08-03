import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {
  render() {
    return (
      <div className="Screen">
        <img className="pokemon-sprite" src={require('./../../images/19.png')} alt="bulbasaur"/>
      </div>
    );
  }
}

export default Screen;
