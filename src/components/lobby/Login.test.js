import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// need some mocking thing

describe('Login functionality', () => {
  it('renders without crashing', () => {
    expect(shallow(<Login />).is(".login")).toBe(true);
  });

  it('allows login through github');

  it('allows login through facebook');

  it('allows for a redirect location in the props'); // yeah needs a rewrite

  it('displays an error message on failed login');

});
