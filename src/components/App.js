import React from 'react'
import { Link } from 'react-router'

const App = (props) => (
  <div>
    <Link to="/" style={{textDecoration:'none'}}>
      <div style={{
        color:'fuchsia',
        fontSize:'40px',
        fontWeight:'bold',
        margin:'24px 0 0',
      }}> 
        NEWARE
      </div>
    </Link>
    <h2 style={{
      fontSize: '16px',
      fontWeight:'500',
      color:'darkgray',
      margin:'0 0 48px 0',
    }}>
      Save it for later from anywhere.
    </h2>
    {props.children}
  </div>
)
export default App

App.propTypes = {
  //children: React.PropTypes.object.isRequired,
};
