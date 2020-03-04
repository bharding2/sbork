import * as React from 'react';
import {shallow} from 'enzyme';
import {SborkApp} from './SborkApp';

describe('SborkApp', () => {
  it('renders a sbork app', () => {
    const app = shallow(<SborkApp />);

    expect(app.find('.SborkApp').exists()).toBe(true);
  });
});