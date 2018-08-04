import React, { Component } from 'react';
import './TextBox.css';

class TextBox extends Component {
  constructor() {
      super();
      this.state = {
        //   id: 1,
          name: ""
      }
  }

//   componentDidMount() {
//     fetch()
//   .then(results => {
//     // console.log(results.json());
//     let newObject = results.json();
//     this.setState({name: newObject.name});
//     console.log(this.state.name);
//     console.log(newObject.name);
//   })
//   }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
      .then(response => response.json())
      .then(data => this.setState({ name: data.name }));
  }

  render() {
    return (
      <div className="TextBox">
        <h2 id="pokemon-name">{this.state.name}</h2>
      </div>
    );
  }
}

export default TextBox;
