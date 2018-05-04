import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EntityList from './EntityList';


describe('Entity List functionality', () => {
  it('renders without crashing', () => {
    expect(shallow(<EntityList />).is(".entity-list")).toBe(true);
  });

  it('displays a list of entities in a battle store');

  it('displays a message when there are no entities in the store', () => {
    expect(shallow(<EntityList />).contains(<div className="no-entities">No entities in the store</div>)).toBe(true);
  });
});
