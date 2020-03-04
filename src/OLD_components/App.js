import React, { Component } from 'react';
import PlayerForm from './PlayerForm';
import PlayerTable from './PlayerTable';
import './App.css';

let samplePlayer = {
  name: 'sample player',
  position: 'cb',
  height: 5.77,
  weight: 177,
  fortyYard: 4.5,
  tenYard: 1.45,
  benchPress: 15,
  verticalJump: 40,
  broadJump: 11,
  threeCone: 6.56,
  shortShuttle: 4.06
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: {},
      players: [samplePlayer]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(e) {
    let newUserInput = Object.assign({}, this.state.userInput);
    
    newUserInput[e.target.id] = e.target.value;

    this.setState({
      userInput: newUserInput
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let currentPlayers = this.state.players.slice();
    currentPlayers.push(this.state.userInput);

    this.setState({
      players: currentPlayers
    });
  }

  handleRemove(e) {
    let targetIdx = +e.target.attributes.name.value;

    let currentPlayers = this.state.players.slice();
    currentPlayers.splice(targetIdx, 1);

    this.setState({
      players: currentPlayers
    });
  }

  render() {
    return (
      <div>
        <h1>sBork</h1>

        <PlayerForm userInput={ this.state.userInput } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } />
        
        <PlayerTable players={ this.state.players } handleRemove={ this.handleRemove }/>
      </div>
    );
  }
}

export default App;