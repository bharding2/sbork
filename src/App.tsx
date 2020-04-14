import * as React from 'react';
import { FunctionComponent } from 'react';
import { SborkApp } from './components/SborkApp';
import { PlayersContainer } from './containers/PlayersContainer';

export const App: FunctionComponent = () => {
  return (
    <PlayersContainer
      render={(players) => (
        <SborkApp
          players={players}
        />
      )}
    />
  );
}