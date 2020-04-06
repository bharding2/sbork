import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { PlayerApiImpl } from './apis/PlayerApi';
import { PlayerApiContext } from './contexts/PlayerApiContext';

const baseUrl = process.env.SBORK_API_URL;
const playerApi = new PlayerApiImpl(baseUrl);

ReactDOM.render((
  <PlayerApiContext.Provider value={playerApi}>
    <App />
  </PlayerApiContext.Provider>
), document.getElementById('app'));