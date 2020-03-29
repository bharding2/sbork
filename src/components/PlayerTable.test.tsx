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
        ...arbitraryPlayer(),
        name: 'Anomander Rake',
      },
      {
        ...arbitraryPlayer(),
        name: 'Caladan Brood',
      },
      {
        ...arbitraryPlayer(),
        name: 'Ben Adaephon Delat',
      },
    ];

    const subject = shallowRender({ players });

    expect(subject.find('.PlayerTable-row').length).toBe(3);
  });

  it('should remove player rows', () => {
    const players = [
      {
        ...arbitraryPlayer(),
        name: 'Anomander Rake',
      },
      {
        ...arbitraryPlayer(),
        name: 'Caladan Brood',
      },
      {
        ...arbitraryPlayer(),
        name: 'Ben Adaephon Delat',
      },
    ];

    const removePlayer = jest.fn();

    const subject = shallowRender({ players, removePlayer });

    subject.find('.PlayerTable-row-remove').at(1).simulate('click');

    expect(removePlayer).toHaveBeenCalledWith(1);
  });

  it('should edit a player', () => {
    const players = [
      {
        ...arbitraryPlayer(),
        name: 'Anomander Rake',
      },
      {
        ...arbitraryPlayer(),
        name: 'Caladan Brood',
      },
      {
        ...arbitraryPlayer(),
        name: 'Ben Adaephon Delat',
      },
    ];

    const setEditPlayerIndex = jest.fn();

    const subject = shallowRender({ players, setEditPlayerIndex });

    subject.find('.PlayerTable-row-edit').at(2).simulate('click');

    expect(setEditPlayerIndex).toHaveBeenCalledWith(2);
  });
});

interface OptionalProps {
  players?: Player[];
  removePlayer?: (index) => void;
  setEditPlayerIndex?: (index) => void;
}

const shallowRender = (props: OptionalProps) => {
  return shallow(<PlayerTable { ...makeProps(props) } />)
};

const makeProps = (props: OptionalProps) => {
  return {
    players: props.players || [],
    removePlayer: props.removePlayer || (() => {}),
    setEditPlayerIndex: props.setEditPlayerIndex || (() => {}),
  };
};