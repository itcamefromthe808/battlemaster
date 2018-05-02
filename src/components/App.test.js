import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe('Global App Functionality', () => {
  it('renders without crashing', () => {
    expect(shallow(<App />).is(".lobby")).toBe(true);
  });

  it('displays the button to create a battle', () => {
    expect(shallow(<App />).find('button.create-battle')).toHaveLength(1);
  });

  it('displays the button to create a sheet', () => {
    expect(shallow(<App />).find('button.create-sheet')).toHaveLength(1);
  });
})
