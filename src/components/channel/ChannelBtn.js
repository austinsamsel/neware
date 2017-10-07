import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { css } from 'glamor-react'
import { s } from '../ui/Styles.js' // styles utility

const btn = css({
  height: '60px',
  padding: '0 12px',
  verticalAlign: 'bottom',
  '@media (max-width:480px)': {
    width: '100%'
  }
})

const ChannelBtn = ({ ch }) => (
  <span data-c="ChannelBtn">
    <Link to={`/${ch}`}>
      <button
        data-t="channelBtn"
        {...btn}
        style={{
          ...s.bg_blue,
          ...s.white,
          ...s.fs__24,
          ...s.bn,
          ...s.bold,
          ...s.border_box,
          ...s.tracked_spaced,
          ...s.br0
        }}
      >
        Go
      </button>
    </Link>
  </span>
)

ChannelBtn.propTypes = {
  ch: PropTypes.string.isRequired
}

export default ChannelBtn
