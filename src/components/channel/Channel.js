import React from 'react'
import PropTypes from 'prop-types'
import FireNotes from '../../containers/notes/FireNotes'
import Hr from '../ui/Hr'
import thumbsup from '../../assets/thumbsup.png'
import { s } from '../ui/Styles.js' // styles utility
import ShareUrl from './ShareUrl'

const emoji_thumbsup = {
  height: '24px',
  marginRight: '10px',
  verticalAlign: '-3px'
}

const Channel = ({ name }) => {
  return (
    <div data-c="Channel">
      <h1 data-t="channelH1" style={{ ...s.fs__36, ...s.m0 }}>
        <img
          style={{ ...emoji_thumbsup, ...s.w_auto }}
          src={thumbsup}
          alt=":thumbs up emoji:"
        />
        {name}
      </h1>
      <ShareUrl />
      <Hr height="36px" />
      <FireNotes ch={name} />
    </div>
  )
}
export default Channel

Channel.propTypes = {
  name: PropTypes.string.isRequired
}
