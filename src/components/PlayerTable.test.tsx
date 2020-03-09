import * as React from 'react';
import {shallow} from 'enzyme';
import {PlayerTable} from './PlayerTable';
import {Player} from './SborkApp';

describe('PlayerTable', () => {
  it('should render a player table', () => {
    const subject = shallowRender({});

    expect(subject.find('.PlayerTable').exists()).toBe(true);
  });
});

interface OptionalProps {
  players?: Player[];
}

const shallowRender = (props: OptionalProps) => {
  return shallow(<PlayerTable {...makeProps(props)} />)
};

const makeProps = (props: OptionalProps) => {
  return {
    players: props.players || []
  };
};