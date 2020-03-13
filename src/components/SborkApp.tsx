import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { PlayerForm } from './PlayerForm';
import { PlayerTable } from './PlayerTable';
import './SborkApp.scss'

export interface Player {
  name: string;
  dob?: string;
  college?: string;
  draftYear?: string;
  position?: string;
  height?: number;
  weight?: number;
  fortyYard?: number;
  tenYard?: number;
  benchPress?: number;
  verticalJump?: number;
  broadJump?: number;
  threeCone?: number;
  shortShuttle?: number;
}

export const samplePlayer: Player = {
  name: 'sample player',
  dob: '1980-01-01',
  college: 'University of Slothbear',
  draftYear: '2000',
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

export const SborkApp: FunctionComponent = () => {
  const [players, setPlayers] = useState<Player[]>([samplePlayer]);
  const [editPlayerIndex, setEditPlayerIndex] = useState();

  const addPlayer = (newPlayer: Player) => {
    setPlayers([...players, newPlayer]);
  }

  const editPlayer = (newPlayer: Player) => {
    const userEditPlayers = [...players];
    userEditPlayers[editPlayerIndex] = newPlayer;

    setPlayers(userEditPlayers);
    setEditPlayerIndex(undefined);
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
        player = { players[editPlayerIndex] }
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