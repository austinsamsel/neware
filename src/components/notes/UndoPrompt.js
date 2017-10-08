import React from 'react'
import PropTypes from 'prop-types'
import hourglass from '../../assets/hourglass--cursor.png'
import { css } from 'glamor'
import { s, fadeout, slidein } from '../ui/Styles.js'

const UndoPrompt = ({ channel, timer, note, removeItem }) => {
  const wrapper = css(
    {
      backgroundColor: 'peachpuff',
      cursor: `url(${hourglass}) 4 12, wait`,
      transition: '1s',
      width: '132px',
      height: '44px',
      animation: `${fadeout} ${timer}s forwards`
    },
    s.bg_blue,
    s.relative,
    s.m0auto
  )
  const progress_bar = css(
    {
      height: '5px',
      bottom: '0px',
      left: '0px',
      animation: `${slidein} ${timer}s forwards`
    },
    s.w_100,
    s.absolute,
    s.bg_fuchsia
  )
  const remove_note = css(
    s.w_100,
    s.h_100,
    s.df,
    s.aic,
    s.jcc,
    s.center,
    s.white
  )
  return (
    <div
      data-t="UndoPrompt"
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
