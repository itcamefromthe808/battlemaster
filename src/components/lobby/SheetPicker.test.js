import React from 'react';
import { MemoryRouter } from 'react-router';
import SheetPicker from './SheetPicker';
import Player from './sheets/Player';
import Monster from './sheets/Monster';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe("SheetPicker functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SheetPicker />
    );
  });

  it('displays a dialog when no sheets exist in store', () => {
    // need to set logged in status
    expect(wrapper.contains(<div className="no-sheets-message"></div>)).toBe(true);
  });

  it('displays a list of sheets');

  it('routes to a player sheet screen when a player sheet is selected');

  it('routes to a monster sheet screen when a monster sheet is selected');
})
