import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Battle from './Battle';

describe('basic Battle viewer functionality', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(
     <Battle />
   );
  });

  it('renders without crashing', () => {
    expect(wrapper.is(".battle-container")).toBe(true);
  });

  it('can check for user permissions and configure layout accordingly');

  it('can create a list of entities from stored data');
});
