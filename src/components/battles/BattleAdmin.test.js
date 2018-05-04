import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BattleAdmin from './BattleAdmin';

describe('BattleAdmin general controls', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(
     <BattleAdmin />
   );
  });

  it('renders without crashing', () => {
    expect(wrapper.is(".battle-controls")).toBe(true);
  });

  it("requires a login");

  // requires firebase integration
  it('can save battle state');

  it('can load an entity from a sheet');

  it('can create an entity', () => {
    // confirm button existance
    expect(wrapper.find(".create-entity")).toHaveLength(1);
    // simulate click
    wrapper.find(".create-entity").simulate("click");
    // check result
    expect(wrapper.instance().state.entities.length).toBe(1);
  });

  it('can remove an entity', () => {
    // make sure button exists for simulate
    expect(wrapper.find(".remove-entity")).toHaveLength(1);
    // important: make sure an entity is selected
    // simulate click
    wrapper.find(".remove-entity").simulate("click");
    // check state
    expect(wrapper.instance().state.entities.length).toBe(1);
  });

  it('can start a round as long as there are at least two entities', () => {
    // make sure button exists for simulate
    expect(wrapper.find(".start-battle")).toHaveLength(1);
    // simulate click
    wrapper.find(".start-battle").simulate("click");
    // check state
    expect(wrapper.instance().state.round).toBe(1);
  });

  it('displays a dialog when the user attempts to start a round with fewer than two entities', () => {
    // set up default state
    wrapper.instance().removeEntity(1);
    expect(wrapper.instance().state.entities.length).toBe(1);
    // make sure button exists for simulate
    expect(wrapper.find(".start-battle")).toHaveLength(1);
    // simulate click
    wrapper.find(".start-battle").simulate("click");
    // check for the dialog

  });

  it('can restart the round');

  it('can advance initiative to the next entity in line', () => {
    expect(wrapper.find(".next-entity")).toHaveLength(1);
    // simulate click
    wrapper.find(".next-entity").simulate("click");
    // set the active index to be the second in the list
    expect(wrapper.instance().state.active).toBe(1);
  });

  it('can rewind initiative to the previous entity in line', () => {
    // set active to point to the second entity
    wrapper.instance().setActiveEntity(1);
    expect(wrapper.instance().state.active).toBe(1);
    // look for the button
    expect(wrapper.find(".previous-entity")).toHaveLength(1);
    // simulate click
    wrapper.find(".previous-entity").simulate("click");
    // check against result
    expect(wrapper.instance().state.active).toBe(0);
  });

  it('will not rewind past the first entity in the list', () => {
    // look for the button
    expect(wrapper.find(".previous-entity")).toHaveLength(1);
    // simulate click
    wrapper.find(".previous-entity").simulate("click");
    // set the active index to be the second in the list
    expect(wrapper.instance().state.active).toBe(0);
  });

  it('will increment the round counter when advancing past the last entity in the list', () => {
    // set active to point to the second entity
    wrapper.instance().setActiveEntity(1);
    expect(wrapper.instance().state.active).toBe(1);
    // look for the button
    expect(wrapper.find(".next-entity")).toHaveLength(1);
    // simulate click
    wrapper.find(".next-entity").simulate("click");
    // check against result
    expect(wrapper.instance().state.active).toBe(0);
    expect(wrapper.instance().state.round).toBe(2);
  });
});
