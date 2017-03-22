import React from 'react'
import { Link } from 'react-router';
import { css } from 'glamor-react'
import s from '../ui/Styles.js' // styles utility

const btn = css({
  height:'60px',
  padding:'0 12px',
  verticalAlign:'bottom',
  '@media (max-width:480px)': {
    width: '100%'
  }
})

const ChannelBtn = ({ ch }) => (
  <span data-c='ChannelBtn'>
    <Link to={`/${ch}`}>
      <button {...btn} style={{...s.bg_blue, ...s.white, ...s.fs__24, ...s.bn, ...s.bold, ...s.border_box, ...s.tracked_spaced}}>
        Go
      </button>
    </Link>
  </span>
)

ChannelBtn.propTypes = {
  ch: React.PropTypes.string.isRequired
}

export default ChannelBtn
