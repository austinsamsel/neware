import React from 'react'
import { Link } from 'react-router';

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
    }}>
      Go
    </button>
  </Link>
)

ChannelBtn.propTypes = {
  ch: React.PropTypes.string.isRequired
}

export default ChannelBtn
