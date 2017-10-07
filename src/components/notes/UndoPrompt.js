import React from 'react'
import PropTypes from 'prop-types'

const UndoPrompt = ({ channel, removeItem }) => {
  return (
    <div
      onClick={e => {
        e.preventDefault()
        removeItem(channel)
      }}
      style={{ cursor: 'default' }}
    >
      Remove Note - {channel} -
    </div>
  )
}

//TODO: checking?
UndoPrompt.propTypes = {
  channel: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired
}

export default UndoPrompt
