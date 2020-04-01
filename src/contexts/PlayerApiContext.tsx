import * as React from 'react';
import { createContext } from 'react';
import { PlayerApi, PlayerApiImpl } from '../apis/PlayerApi';

const defaultApi: PlayerApi = new PlayerApiImpl('localhost:5555/api');

export const PlayerApiContext = createContext<PlayerApi>(defaultApi);