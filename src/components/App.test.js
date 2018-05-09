import React from 'react';

import App from './App';
import Battle from './battles/Battle';
import Player from './sheets/Player';
import Monster from './sheets/Monster';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe('App (Lobby) Functionality', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.is(".lobby")).toBe(true);
  });

  it('renders a login when user is not logged in', () => {
    expect(wrapper.find('.login')).toHaveLength(1);
  });

  it('routes to a battle screen when a battle is created', () => {
    expect(wrapper.find('.create-battle')).toHaveLength(1);
    wrapper.find('.create-battle').simulate('click');
    expect(wrapper.find(Battle)).toHaveLength(1);
  });

  it('routes to a player sheet screen when a player sheet is created', () => {
    expect(wrapper.find('.create-player-sheet')).toHaveLength(1);
    wrapper.find('.create-player-sheet').simulate('click');
    expect(wrapper.find(Player)).toHaveLength(1);
  });

  it('routes to a monster sheet screen when a monster sheet is created', () => {
    expect(wrapper.find('.create-monster-sheet')).toHaveLength(1);
    wrapper.find('.create-monster-sheet').simulate('click');
    expect(wrapper.find(Monster)).toHaveLength(1);
  });
})
