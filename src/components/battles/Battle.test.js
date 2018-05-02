import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Battle from './Battle';

describe('basic Battle functionality', () => {
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

  it('renders without crashing', () => {
    expect(wrapper.is(".battle-container")).toBe(true);
  });

  it('will automatically start a round when advancing past the last entity in the list', () => {
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
