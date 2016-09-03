import React from 'react'
import { Link } from 'react-router'

const App = ({ children }) => (
  <div>
    <Link to="/" style={{textDecoration:'none'}}>
      <div style={{
        color:'fuchsia',
        fontSize:'48px',
        fontWeight:'bold',
        margin:'24px 0',
      }}> 
        NEWARE
      </div>
    </Link>
    {children}
  </div>
)
export default App

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};