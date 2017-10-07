import React from 'react'

const UndoPrompt = ({ channel, removeItem }) => {
  console.log('UndoPrompt.js : ', channel, removeItem)
  return (
    <span
      onClick={e => {
        e.preventDefault()
        removeItem(channel)
      }}
      style={{ cursor: 'default' }}
    >
      Undo Save - {channel} -
    </span>
  )
}

export default UndoPrompt

//TODO:
// prop types
