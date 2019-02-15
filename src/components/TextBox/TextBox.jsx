import React, { Component } from 'react';
import './TextBox.css';

class TextBox extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name: "",
          height: 0,
          weight: 0,
          type: []
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
      .then(data => 
        this.setState({ 
          name: data.name,
          height: (data.height / 10),
          weight: (data.weight / 10)
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
        .then(response => response.json())
        .then(data => 
            this.setState({ 
            name: data.name,
            height: (data.height / 10),
            weight: (data.weight / 10)
            })
        );
    }
  }

  render() {
    return (
      <div className="TextBox">
        <div className="pokemon-info">
            <h2 id="pokemon-name">{this.state.name}</h2>
            <h3>Height: {this.state.height} m</h3>
            <h3>Weight: {this.state.weight} kg</h3>
        </div>
      </div>
    );
  }
}

export default TextBox;
