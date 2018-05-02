import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BattleAdmin from './BattleAdmin';

describe('BattleAdmin entity controls', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(
     <Battle entities={[{
       "position":"first",
       "initiative":10
     },{
       "position":"second",
       "initiative":5
     }]} />
   );
  });

  it('can load an entity from a sheet');

  it('can create an entity inline');

  it('can remove an entity', () => {
    // make sure button exists for simulate
    expect(wrapper.find(".remove-entity")).toHaveLength(1);
    // important: make sure an entity is selected
    // simulate click
    wrapper.find(".remove-entity").simulate("click");
    // check state
    expect(wrapper.instance().state.entities.length).toBe(1);
  });

  it('can edit entities inline');

  it('can load the corresponding sheet from an entity in the list');

  it('can load a display of all player sheets involved in the current battle');

  it('can load a display of all monster sheets involved in the current battle');
});

describe('BattleAdmin combat controls', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(
     <Battle entities={[{
       "position":"first",
       "initiative":10
     },{
       "position":"second",
       "initiative":5
     }]} />
   );
  });
  
  // requires firebase integration
  it('can save battle state');

  it('can start a round as long as there are at least two entities', () => {
    // make sure button exists for simulate
    expect(wrapper.find(".start-battle")).toHaveLength(1);
    // simulate click
    wrapper.find(".start-battle").simulate("click");
    // check state
    expect(wrapper.instance().state.round).toBe(1);
  });

  it('displays a dialog when the user attempts to start a battle with fewer than two entities', () => {
    // set up default state
    wrapper.instance().removeEntity(1);
    expect(wrapper.instance().state.entities.length).toBe(1);
    // make sure button exists for simulate
    expect(wrapper.find(".start-battle")).toHaveLength(1);
    // simulate click
    wrapper.find(".start-battle").simulate("click");
    // check for the dialog

  });

  it('can reroll initiative which restarts the round');

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
});
