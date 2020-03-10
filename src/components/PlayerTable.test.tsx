import * as React from 'react';
import { shallow } from 'enzyme';
import { PlayerTable } from './PlayerTable';
import { Player } from './SborkApp';
import { arbitraryPlayer } from '../testSupport/arbitraryObjects';

describe('PlayerTable', () => {
  it('should render a player table', () => {
    const subject = shallowRender({});

    expect(subject.find('.PlayerTable').exists()).toBe(true);
  });

  it('should render player rows', () => {
    const players = [
      {
        ...arbitraryPlayer,
        name: 'Anomander Rake',
      },
      {
        ...arbitraryPlayer,
        name: 'Caladan Brood',
      },
      {
        ...arbitraryPlayer,
        name: 'Ben Adaephon Delat',
      },
    ];

    const subject = shallowRender({ players });

    expect(subject.find('.PlayerTable-row').length).toBe(3);
  });
});

interface OptionalProps {
  players?: Player[];
}

const shallowRender = (props: OptionalProps) => {
  return shallow(<PlayerTable { ...makeProps(props) } />)
};

const makeProps = (props: OptionalProps) => {
  return {
    players: props.players || []
  };
};