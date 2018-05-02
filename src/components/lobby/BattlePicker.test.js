import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BattlePicker from './BattlePicker';
import Battle from "../battles/Battle";


describe('BattlePicker test functionality', () => {
  it('renders without crashing', () => {
    expect(shallow(<BattlePicker />).is(".battle-picker")).toBe(true);
  });

  it('displays a dialog when no battles exist in store', () => {
    expect(shallow(<BattlePicker />).contains(<div className="no-results-message"></div>))
  });

  // it('gets a list of battles from firebase');
  //
  // it('routes to a battle screen when a battle is selected', () => {
  //   const wrapper = mount(
  //     <MemoryRouter>
  //       <BattlePicker />
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find('.battle-list li')).toBeGreaterThanOrEqual(1);
  //   wrapper.find('.create-battle').simulate('click');
  //   expect(wrapper.find(Battle)).toHaveLength(1);
  // });

  it('routes to a battle screen when a battle is created', () => {
    const wrapper = mount(
      <MemoryRouter>
        <BattlePicker />
      </MemoryRouter>
    );
    expect(wrapper.find('.create-battle')).toHaveLength(1);
    wrapper.find('.create-battle').simulate('click');
    expect(wrapper.find(Battle)).toHaveLength(1);

  });
});
