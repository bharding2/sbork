import * as React from 'react';
import {shallow} from 'enzyme';
import {SborkApp, samplePlayer} from './SborkApp';
import {PlayerTable} from './PlayerTable';

describe('SborkApp', () => {
  it('should render a sbork app', () => {
    const subject = shallowRender({});

    expect(subject.find('.SborkApp').exists()).toBe(true);
  });

  it('should render a PlayerTable', () => {
    const subject = shallowRender({});

    expect(subject.find(PlayerTable).exists()).toBe(true);
    expect(subject.find(PlayerTable).prop('players')).toEqual([samplePlayer])
  });
});

interface OptionalProps {}

const shallowRender = (props: OptionalProps) => {
  return shallow(<SborkApp {...makeProps(props)} />)
};

const makeProps = (props: OptionalProps) => {
  return {};
};