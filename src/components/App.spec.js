import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

// full rendering with mounting
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders the title', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains('NEWARE')).toEqual(true);
});
