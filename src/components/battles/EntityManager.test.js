import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EntityManager from './EntityManager';

describe('Entity management functionality', () => {
  let wrapper = null, instance = null;

  beforeEach(() => {
    wrapper = shallow(
     <EntityManager />
   );
   instance = wrapper.instance();
  });

  it('renders without crashing', () => {
    expect(wrapper.is(".entity-manager")).toBe(true);
  });

  // gonna start writing these after teh Entity is complete
  it("requires a login");

  it("can load details from an entity in the store");

  it("routes to the corresponding entity sheet");

  it("can set required information into an entity");

  it('can give an entity damage');

  it('can heal an entity');

  it("can mark an entity's power as consumed");

  it('can add a status to an entity');

  it('can remove a status from an entity');
});
