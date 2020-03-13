import * as React from 'react';
import { FunctionComponent } from 'react';
import { Player } from './SborkApp';
import sbork from '../../sbork';
import './PlayerTable.scss'

interface Props {
  players: Player[];
  removePlayer: (index) => void;
  setEditPlayerIndex: (index) => void;
}

export const PlayerTable: FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="PlayerTable">
      <table>
        <tbody>
          <tr className="PlayerTable-header">
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
          { props.players.map((player: Player, index) => {
            return (
              <tr key={ index } className="PlayerTable-row">
                <td>{ player.name }</td>
                <td>{ player.position }</td>
                <td>{ player.height }ft</td>
                <td>{ player.weight }lbs</td>
                <td>{ player.fortyYard }s</td>
                <td>{ player.tenYard }s</td>
                <td>{ player.benchPress }reps</td>
                <td>{ player.verticalJump }in</td>
                <td>{ player.broadJump }ft</td>
                <td>{ player.threeCone }s</td>
                <td>{ player.shortShuttle }s</td>
                <td>{ sbork(player, player.position).toFixed(2) }</td>
                <td
                  className="PlayerTable-row-edit"
                  onClick={() => props.setEditPlayerIndex(index)}
                >
                  Edit
                </td>
                <td
                  className="PlayerTable-row-remove"
                  onClick={() => props.removePlayer(index)}
                >
                  X
                </td>
              </tr>
            );
          }) }
        </tbody>
      </table>
    </div>
  );
}