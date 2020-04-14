import * as React from 'react';
import { FunctionComponent, ReactElement, useState, useEffect, useContext } from 'react';
import { Player } from '../apis/PlayerApi';
import { PlayerApiContext } from '../contexts/PlayerApiContext';

interface Props {
  render: (players: Player[]) => ReactElement;
}

export const PlayersContainer: FunctionComponent<Props> = (props: Props) => {
  const [players, setPlayers] = useState<Player[]>();
  const [loadingFailed, setLoadingFailed] = useState<boolean>(false);
  const playerApi = React.useContext(PlayerApiContext);

  useEffect(() => {
    playerApi.getPlayers()
      .then((res: Player[]) => {
        setPlayers(res);
      })
      .catch(() => {
        setLoadingFailed(true);
      });
  }, []);

  if (loadingFailed) {
    return <div>Loading Failed</div>;
  } else if (players) {
    return props.render(players);
  } else {
    return <div>Loading</div>;
  }
};