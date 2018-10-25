import React, { Component } from 'react';
import PlayerForm from './PlayerForm';
import PlayerRow from './PlayerRow';
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
    let players = this.state.players.map((player, idx) => {
      return (
        <PlayerRow key={ idx } player={ player } handleRemove={ this.handleRemove }/>
      );
    })

    return (
      <div>
        <h1>sBork</h1>

        <PlayerForm userInput={ this.state.userInput } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } />
        
        <table>
          <tbody>
            <tr>
              <th>name</th>
              <th>position</th>
              <th>height</th>
              <th>weight</th>
              <th>fortyYard</th>
              <th>tenYard</th>
              <th>benchPress</th>
              <th>verticalJump</th>
              <th>broadJump</th>
              <th>threeCone</th>
              <th>shortShuttle</th>
              <th>sbork</th>
            </tr>
            { players }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;