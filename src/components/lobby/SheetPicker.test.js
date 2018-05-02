import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SheetPicker from './SheetPicker';

describe('SheetPicker test functionality', () => {
  it('renders without crashing', () => {
    expect(shallow(<SheetPicker />).is(".sheet-picker")).toBe(true);
  });

  it('displays a dialog when no sheets exist');

  it('gets a list of sheets from firebase');

  it('routes to a player sheet screen when a player sheet is selected');

  it('routes to a monster sheet screen when a monster sheet is selected');

  it('routes to a player sheet screen when a player sheet is created');

  it('routes to a monster sheet screen when a monster sheet is created');
});
