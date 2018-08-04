import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {
//   constructor() {
//       super();
//     //   this.state = {
//     //       id: 1,
//     //   }
//   }

  render() {
    return (
      <div className="Screen">
        <img className="pokemon-sprite" src={require(`./../../images/${this.props.id}.png`)} alt="bulbasaur"/>
      </div>
    );
  }
}

export default Screen;
