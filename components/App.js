import React from 'react'
import { Link } from 'react-router'

const App = ({ children }) => (
  <div>
    <Link to="/">NEWARE</Link>
    {children}
  </div>
)
export default App

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};
