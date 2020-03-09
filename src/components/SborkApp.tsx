import * as React from 'react';
import {FunctionComponent, useState} from 'react';
import {PlayerTable} from './PlayerTable';
import './SborkApp.scss'

export interface Player {
  name: string;
  position: string;
  height: number;
  weight: number;
  fortyYard: number;
  tenYard: number;
  benchPress: number;
  verticalJump: number;
  broadJump: number;
  threeCone: number;
  shortShuttle: number;
}

export const samplePlayer: Player = {
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

export const SborkApp: FunctionComponent = () => {
  const [players, setPlayers] = useState<Player[]>([samplePlayer]);

  return (
    <div className="SborkApp">
      <div className="SborkApp-title">Sbork App</div>
      <PlayerTable
        players={players}
      />
    </div>
  );
};