import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { PlayerForm } from './PlayerForm';
import { PlayerTable } from './PlayerTable';
import './SborkApp.scss'
import { Player } from '../apis/PlayerApi';

interface Props {
  players: Player[];
}

export const SborkApp: FunctionComponent<Props> = (props: Props) => {
  const [players, setPlayers] = useState<Player[]>(props.players);
  const [editPlayerIndex, setEditPlayerIndex] = useState(null);

  const addPlayer = (newPlayer: Player) => {
    setPlayers([...players, newPlayer]);
  }

  const editPlayer = (newPlayer: Player) => {
    const userEditPlayers = [...players];
    userEditPlayers[editPlayerIndex] = newPlayer;

    setPlayers(userEditPlayers);
    setEditPlayerIndex(null);
  }

  const removePlayer = (index) => {
    const currentPlayers = [...players];
    currentPlayers.splice(index, 1);

    setPlayers(currentPlayers);
  }

  return (
    <div className="SborkApp">
      <div className="SborkApp-title">Sbork App</div>
      <PlayerForm
        player={ players[editPlayerIndex] }
        addPlayer={ addPlayer }
        editPlayer={ editPlayer }
      />
      <PlayerTable
        players={ players }
        removePlayer={ removePlayer }
        setEditPlayerIndex={ setEditPlayerIndex }
      />
    </div>
  );
};