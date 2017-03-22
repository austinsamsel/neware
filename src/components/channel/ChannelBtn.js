import React from 'react'
import { Link } from 'react-router';
import { css } from 'glamor-react'

const btn = css({
  backgroundColor:'blue',
  fontSize:'24px',
  color:'white',
  border:'none',
  height:'60px',
  padding:'0 12px',
  letterSpacing:'0.1rem',
  fontWeight:'bold',
  boxSizing: 'border-box',
  verticalAlign:'bottom',
  '@media (max-width:480px)': {
    width: '100%'
  }
})

const ChannelBtn = ({ ch }) => (
  <span data-c='ChannelBtn'>
    <Link to={`/${ch}`}>
      <button {...btn}>
        Go
      </button>
    </Link>
  </span>
)

ChannelBtn.propTypes = {
  ch: React.PropTypes.string.isRequired
}

export default ChannelBtn
