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
      <h2 style={{
        fontSize: '16px',
        fontWeight:'500',
        margin:'0',
        color:'darkgray',
      }}>
      Save it for later from anywhere.
    </h2>
    <div style={{
      color:'gray',
      fontSize:'10px',
      fontWeight:'100',
      fontFamily:'monospace',
      margin:'0 0 24px 0',
    }}
    >
      --------------------------------------
    </div>
    </Link>
    {props.children}
  </div>
)
export default App

App.propTypes = {
  //children: React.PropTypes.object.isRequired,
};
