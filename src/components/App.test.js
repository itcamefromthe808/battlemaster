import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe('App (Lobby) Functionality', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.is(".lobby")).toBe(true);
  });


  it('displays a dialog when no battles exist in store', () => {
    expect(wrapper.contains(<div className="no-battles-message"></div>));
  });

  it('displays a dialog when no sheets exist in store', () => {
    expect(wrapper.contains(<div className="no-sheets-message"></div>));
  });


  //firebase stuff
  it('gets a list of sheets from store');
  it('gets a list of battles from store');

  it('routes to a battle screen when a battle is created', () => {
    expect(wrapper.find('.create-battle')).toHaveLength(1);
    wrapper.find('.create-battle').simulate('click');
    expect(wrapper.find(Battle)).toHaveLength(1);
  });

  it('routes to a battle screen when a battle is selected');

  it('routes to a player sheet screen when a player sheet is selected');

  it('routes to a monster sheet screen when a monster sheet is selected');

  it('routes to a player sheet screen when a player sheet is created');

  it('routes to a monster sheet screen when a monster sheet is created');
})
