import React from 'react'

import { Link, browserHistory } from 'react-router'

const App = ({ children }) => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <button onClick={() => browserHistory.push('/about')}>Go to /about</button>
    {children}
  </div>
)

export default App
