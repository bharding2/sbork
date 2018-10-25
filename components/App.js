import React, { Component } from 'react';
import Player from './Player';
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
      userInput: {
        name: ''
      },
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
        <Player name={ idx } player={ player } handleRemove={ this.handleRemove }/>
      );
    })

    return (
      <div>
        <h1>sBork</h1>

        <form onChange={ this.handleChange } onSubmit={ this.handleSubmit }>
          <p>
            <label for="name">name</label>
            <textarea id="name" value={ this.state.userInput.name } />
          </p>
          <p>
            <label for="position">position</label>
            <textarea id="position" value={ this.state.userInput.position } />
          </p>
          <p>
            <label for="height">height</label>
            <textarea id="height" value={ this.state.userInput.height } />
          </p>
          <p>
            <label for="weight">weight</label>
            <textarea id="weight" value={ this.state.userInput.weight } />
          </p>
          <p>
            <label for="fortyYard">fortyYard</label>
            <textarea id="fortyYard" value={ this.state.userInput.fortyYard } />
          </p>
          <p>
            <label for="tenYard">tenYard</label>
            <textarea id="tenYard" value={ this.state.userInput.tenYard } />
          </p>
          <p>
            <label for="benchPress">benchPress</label>
            <textarea id="benchPress" value={ this.state.userInput.benchPress } />
          </p>
          <p>
            <label for="verticalJump">verticalJump</label>
            <textarea id="verticalJump" value={ this.state.userInput.verticalJump } />
          </p>
          <p>
            <label for="broadJump">broadJump</label>
            <textarea id="broadJump" value={ this.state.userInput.broadJump } />
          </p>
          <p>
            <label for="threeCone">threeCone</label>
            <textarea id="threeCone" value={ this.state.userInput.threeCone } />
          </p>
          <p>
            <label for="shortShuttle">shortShuttle</label>
            <textarea id="shortShuttle" value={ this.state.userInput.shortShuttle } />
          </p>
          <input type="submit" value="Create Player" />
        </form>
        
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