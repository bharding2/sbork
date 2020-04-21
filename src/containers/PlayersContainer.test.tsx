import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { PlayersContainer } from './PlayersContainer';
import { PlayerApi, Player } from '../apis/PlayerApi';
import { PlayerApiContext } from '../contexts/PlayerApiContext';
import { stubPlayerApi } from '../testSupport/stubApis';
import { arbitraryPlayer } from '../testSupport/arbitraryObjects';

describe('PlayersContainer', () => {
  it('should render a loading div', async() => {
    const mockPlayerPromise = Promise.resolve([]);
    const getPlayers = () => mockPlayerPromise;
    const playerApi = {
      ...stubPlayerApi(),
      getPlayers,
    }

    const subject = mountRender({playerApi});

    expect(subject.find('div').text()).toBe('Loading');

    await act(async () => {
      await mockPlayerPromise;
      subject.update();
    });

    expect(subject.find('div').text()).not.toBe('Loading');
  });

  it('should render a loading failed div', async () => {
    const mockPlayerPromise = Promise.reject('blah');
    const getPlayers = () => mockPlayerPromise;
    const playerApi = {
      ...stubPlayerApi(),
      getPlayers,
    }

    const subject = mountRender({playerApi});

    try {
      await act(async () => {
        await mockPlayerPromise;
        subject.update();
      });
    } catch {
      expect(subject.find('div').text()).toBe('Loading Failed');
    }
  });

  it('should call the api and return a render prop', async () => {
    const players = [{...arbitraryPlayer()}];
    const mockPlayerPromise = Promise.resolve(players);
    const getPlayers = () => mockPlayerPromise;
    const playerApi = {
      ...stubPlayerApi(),
      getPlayers,
    }

    const render = jest.fn();
    render.mockReturnValueOnce((<div className="Slothbears"/>))

    const subject = mountRender({playerApi, render});

    await act(async () => {
      await mockPlayerPromise;
      subject.update();
    });

    expect(render).toBeCalledWith(players);
    expect(subject.find('.Slothbears').exists()).toBe(true);
  });
});

interface OptionalProps {
  render?: () => React.ReactElement;
  playerApi?: PlayerApi;
}

const mountRender = (props: OptionalProps) => {
  return mount(
    <PlayerApiContext.Provider value={props.playerApi || stubPlayerApi()}>
      <PlayersContainer { ...makeProps(props) } />
    </PlayerApiContext.Provider>
  )
};

const makeProps = (props: OptionalProps) => {
  return {
    render: props.render || (() => <div/>),
  };
};