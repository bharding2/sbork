import React, { Component } from 'react';
import Player from './Player';

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
          <label for="name">name
            <textarea id="name" value={ this.state.userInput.name } />
          </label><br />
          <label for="position">position
            <textarea id="position" value={ this.state.userInput.position } />
          </label><br />
          <label for="height">height
            <textarea id="height" value={ this.state.userInput.height } />
          </label><br />
          <label for="weight">weight
            <textarea id="weight" value={ this.state.userInput.weight } />
          </label><br />
          <label for="fortyYard">fortyYard
            <textarea id="fortyYard" value={ this.state.userInput.fortyYard } />
          </label><br />
          <label for="tenYard">tenYard
            <textarea id="tenYard" value={ this.state.userInput.tenYard } />
          </label><br />
          <label for="benchPress">benchPress
            <textarea id="benchPress" value={ this.state.userInput.benchPress } />
          </label><br />
          <label for="verticalJump">verticalJump
            <textarea id="verticalJump" value={ this.state.userInput.verticalJump } />
          </label><br />
          <label for="broadJump">broadJump
            <textarea id="broadJump" value={ this.state.userInput.broadJump } />
          </label><br />
          <label for="threeCone">threeCone
            <textarea id="threeCone" value={ this.state.userInput.threeCone } />
          </label><br />
          <label for="shortShuttle">shortShuttle
            <textarea id="shortShuttle" value={ this.state.userInput.shortShuttle } />
          </label><br />
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