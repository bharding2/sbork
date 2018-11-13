import React, { Component } from 'react';
import PlayerRow from './PlayerRow';

class PlayerTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let players = this.props.players.map((player, idx) => {
      return (
        <PlayerRow key={ idx } name={ idx } player={ player } handleRemove={ this.props.handleRemove }/>
      );
    })

    return (
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
    );
  }
}

export default PlayerTable;