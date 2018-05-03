import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// login tests will be built later

describe('Login functionality', () => {
  it('renders without crashing', () => {
    expect(shallow(<Login />).is(".login")).toBe(true);
  });
  
  it('handles login through github', () => {

  });

  it('displays an error message on failed login', () => {

  });
});
