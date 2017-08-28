import React from 'react'
import { shallow } from 'enzyme'
import About from './About'
import ReactDOM from 'react-dom'

// smoke test:
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<About />, div)
})

// shallow rendering with Enzyme
// it('renders some about text', () => {
//   const wrapper = shallow(<About />);
//   const intro = 'How it works'
//   expect(wrapper.contains(intro)).toEqual(true);
// });
