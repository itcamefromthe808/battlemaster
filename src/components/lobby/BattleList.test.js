import React from 'react';
import { MemoryRouter } from 'react-router';
import BattleList from './BattleList';
import Battle from "./battles/Battle";


import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe("Battle Listing functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BattleList />
    );
  });

  it('displays a dialog when no battles exist in store', () => {
    // need to set logged in status
    expect(wrapper.contains(<div className="no-battles-message"></div>)).toBe(true);
  });

  it('displays a list of battles');

  it('routes to a battle screen when a battle is selected');
})
