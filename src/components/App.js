import React from 'react'
import { Link } from 'react-router'

const App = ({ children }) => (
  <div>
    <Link to="/" style={{textDecoration:'none'}}>
      <h1 style={{
        color:'fuchsia',
        fontSize:'48px',
      }}> 
        NEWARE
      </h1>
    </Link>
    {children}
  </div>
)
export default App

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};
