import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from './App'

// smoke test:
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

// shallow rendering, testing output:
it('renders the title', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.contains('NEWARE')).toEqual(true)
})

// shallow rendering with Enzyme
it('renders the tagline', () => {
  const wrapper = shallow(<App />)
  const tagline = 'Save it for later from anywhere.'
  expect(wrapper.contains(tagline)).toEqual(true)
})
