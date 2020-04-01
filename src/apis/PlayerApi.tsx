import * as React from 'react';
import axios from 'axios';

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

export interface PlayerApi {
  getPlayers(): Promise<Player[]>;
}

export class PlayerApiImpl implements PlayerApi {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getPlayers = () => {
    return axios.get(this.baseUrl + '/player/all')
      .then((res) => res.data)
  }
}

