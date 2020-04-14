import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { App } from './App';
import { SborkApp } from './components/SborkApp';
import { PlayerApiContext } from './contexts/PlayerApiContext';
import { stubPlayerApi } from './testSupport/stubApis';
import { PlayerApi } from './apis/PlayerApi';

describe('App', () => {
  it('should render a SborkApp', async () => {
    const mockPlayerPromise = Promise.resolve([])
    const getPlayers = () => mockPlayerPromise;
    const playerApi = {
      ...stubPlayerApi(),
      getPlayers,
    }

    const subject = mountRender({playerApi});

    await act(async () => {
      await mockPlayerPromise;
      subject.update();
    });

    expect(subject.find(SborkApp).exists()).toBe(true);
  });
});

interface OptionalProps {
  playerApi?: PlayerApi;
}

const mountRender = (props: OptionalProps) => {
  return mount(
    <PlayerApiContext.Provider value={props.playerApi || stubPlayerApi()}>
      <App { ...makeProps(props) } />
    </PlayerApiContext.Provider>
  );
};

const makeProps = (props: OptionalProps) => {
  return {};
};