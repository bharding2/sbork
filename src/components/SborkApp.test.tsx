import * as React from 'react';
import { shallow } from 'enzyme';
import { SborkApp } from './SborkApp';
import { PlayerForm } from './PlayerForm';
import { PlayerTable } from './PlayerTable';
import { Player } from '../apis/PlayerApi';
import { arbitraryPlayer } from '../testSupport/arbitraryObjects';

describe('SborkApp', () => {
  it('should render a sbork app', () => {
    const subject = shallowRender({});

    expect(subject.find('.SborkApp').exists()).toBe(true);
  });

  it('should render a PlayerForm', () => {
    const subject = shallowRender({});

    expect(subject.find(PlayerForm).exists()).toBe(true);
  });

  it('should render a PlayerTable', () => {
    const players = [arbitraryPlayer()];
    const subject = shallowRender({players});

    expect(subject.find(PlayerTable).exists()).toBe(true);
    expect(subject.find(PlayerTable).prop('players')).toEqual(players);
  });
});

interface OptionalProps {
  players?: Player[];
}

const shallowRender = (props: OptionalProps) => {
  return shallow(<SborkApp { ...makeProps(props) } />)
};

const makeProps = (props: OptionalProps) => {
  return {
    players: props.players || [],
  };
};