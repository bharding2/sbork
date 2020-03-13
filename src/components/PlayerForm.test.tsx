import * as React from 'react';
import { shallow } from 'enzyme';
import { PlayerForm } from './PlayerForm';
import { Player } from './SborkApp';
import { arbitraryPlayer } from '../testSupport/arbitraryObjects';

describe('PlayerForm', () => {
  it('should render a player form', () => {
    const subject = shallowRender({});

    expect(subject.find('.PlayerForm').exists()).toBe(true);
  });

  it('should add a player', () => {
    const expectedPlayer = {
      ...arbitraryPlayer,
      name: 'Tingle',
    };

    const addPlayer = jest.fn();

    const subject = shallowRender({addPlayer});

    const getAttribute = jest.fn();
    getAttribute.mockReturnValue('name');

    const nameTextArea = () => subject.find('textarea').at(0);

    nameTextArea().simulate('change', { target: { value: 'Tingle', getAttribute } });
    
    expect(nameTextArea().prop('value')).toBe('Tingle');

    const preventDefault = jest.fn();

    subject.find('form').simulate('submit', { preventDefault });

    expect(addPlayer).toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
    expect(nameTextArea().prop('value')).toBe('');
  });

  it('should edit a player', () => {
    const player = {
      ...arbitraryPlayer,
      name: 'Dongle',
    }

    const expectedPlayer = {
      ...arbitraryPlayer,
      name: 'Tingle',
    };

    const addPlayer = jest.fn();
    const editPlayer = jest.fn()

    const subject = shallowRender({player, addPlayer, editPlayer});

    const getAttribute = jest.fn();
    getAttribute.mockReturnValue('name');

    const nameTextArea = () => subject.find('textarea').at(0);

    nameTextArea().simulate('change', { target: { value: 'Tingle', getAttribute } });
    
    expect(nameTextArea().prop('value')).toBe('Tingle');

    const preventDefault = jest.fn();

    subject.find('form').simulate('submit', { preventDefault });

    expect(editPlayer).toHaveBeenCalled();
    expect(addPlayer).not.toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
    expect(nameTextArea().prop('value')).toBe('');
  });
});

interface OptionalProps {
  player?: Player;
  addPlayer?: (newPlayer: Player) => void;
  editPlayer?: (newPlayer: Player) => void;
}

const shallowRender = (props: OptionalProps) => {
  return shallow(<PlayerForm { ...makeProps(props)} />)
}

const makeProps = (props: OptionalProps) => {
  return {
    player: props.editPlayer,
    addPlayer: props.addPlayer || (() => {}),
    editPlayer: props.editPlayer || (() => {}),
  }
};