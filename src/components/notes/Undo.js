import React from 'react'

export default ({ note, undoSave }) => {
  return (
    <span
      onClick={e => {
        e.preventDefault()
        undoSave('route name')
      }}
      style={{ cursor: 'default' }}
    >
      Undo Save
    </span>
  )
}
