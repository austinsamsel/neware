import React from 'react'
import PropTypes from 'prop-types'
import hourglass from '../../assets/hourglass--cursor.png'
import { css } from 'glamor'
import { s, fadeout, slidein } from '../ui/Styles.js'

const UndoPrompt = ({ channel, timer, note, removeItem }) => {
  const wrapper = css(
    {
      bottom: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'peachpuff',
      cursor: `url(${hourglass}) 4 12, wait`,
      transition: '1s',
      width: '132px',
      height: '44px',
      animation: `${fadeout} ${timer}s forwards`
    },
    s.absolute
  )
  const progress_bar = css(
    {
      background: 'darksalmon',
      height: '5px',
      bottom: '0px',
      left: '0px',
      animation: `${slidein} ${timer}s forwards`
    },
    s.w_100,
    s.absolute
  )
  const remove_note = css(
    {
      color: 'darksalmon'
    },
    s.w_100,
    s.h_100,
    s.df,
    s.aic,
    s.jcc,
    s.center
  )
  return (
    <div
      data-c="UndoPrompt"
      {...wrapper}
      onClick={e => {
        e.preventDefault()
        removeItem(channel)
      }}
    >
      <span {...remove_note}>Remove Note</span>
      <span {...progress_bar} />
    </div>
  )
}

//TODO: checking?
UndoPrompt.propTypes = {
  channel: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired
}

export default UndoPrompt
