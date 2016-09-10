import React from 'react';
import { shallow } from 'enzyme';
import About from './About';
import ReactDOM from 'react-dom';

// smoke test:
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
});

// shallow rendering with Enzyme
it('renders the tagline', () => {
  const wrapper = shallow(<About />);
  const tagline = 'Save it for later from anywhere.'
  expect(wrapper.contains(tagline)).toEqual(true);
});
