import React from 'react'
import PropTypes from 'prop-types'
import ChannelSubmit from '../../containers/channel/ChannelSubmit'
import About from '../pages/About'
import Hr from '../ui/Hr'
import { css } from 'glamor-react'
import s from '../ui/Styles.js' // styles utility

const input_el = css({
  padding: '12px',
  height: '60px',
  '@media (max-width:480px)': {
    width: '100%'
  }
})

let input
const ChannelForm = props => (
  <div data-c="ChannelForm">
    <input
      data-t="channelInput"
      placeholder="Name a channel"
      onKeyUp={e => {
        if (!input.value.trim()) {
          return
        }
        props.onKeyUp(input.value.toLowerCase())
      }}
      ref={node => {
        input = node
      }}
      {...input_el}
      style={{
        ...s.mw_100,
        ...s.bold,
        ...s.black,
        ...s.border_box,
        ...s.fs__24,
        ...s.br0,
        ...s.border_blue
      }}
    />
    <ChannelSubmit />
    <Hr height="48px" />
    <About />
  </div>
)

ChannelForm.propTypes = {
  onKeyUp: PropTypes.func.isRequired
}

export default ChannelForm
