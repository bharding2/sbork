import React, { Component } from 'react';
import sbork from '../sbork';
import './Player.css';

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

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{ this.props.player.name }</td>
        <td>{ this.props.player.position }</td>
        <td>{ this.props.player.height }ft</td>
        <td>{ this.props.player.weight }lbs</td>
        <td>{ this.props.player.fortyYard }s</td>
        <td>{ this.props.player.tenYard }s</td>
        <td>{ this.props.player.benchPress }reps</td>
        <td>{ this.props.player.verticalJump }in</td>
        <td>{ this.props.player.broadJump }ft</td>
        <td>{ this.props.player.threeCone }s</td>
        <td>{ this.props.player.shortShuttle }s</td>
        <td>{ sbork(this.props.player, this.props.player.position).toFixed(2)}</td>
        <td name={ this.props.name } onClick={ this.props.handleRemove }>X</td>
      </tr>
    );
  }
}

export default Player;