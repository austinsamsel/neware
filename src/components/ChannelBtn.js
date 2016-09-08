import React from 'react'
import { Link } from 'react-router';
import Radium from 'radium'

const ChannelBtn = ({ ch }) => (
  <Link to={`/${ch}`}>
    <button style={{
      backgroundColor:'blue',
      fontSize:'24px',
      color:'white',
      border:'none',
      height:'60px',
      padding:'0 12px',
      letterSpacing:'0.1rem',
      fontWeight:'bold',
      boxSizing: 'border-box',
      '@media (max-width:480px)': {
        width: '100%'
      }
    }}>
      Go
    </button>
  </Link>
)

ChannelBtn.propTypes = {
  ch: React.PropTypes.string.isRequired
}

export default Radium(ChannelBtn)
