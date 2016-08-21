import React from 'react'
import { connect } from 'react-redux'
import { addChannel } from '../actions'
import GoTo from './GoTo'

let AddChannel = ({ dispatch }) => {
  let input

  return (
    <div>
      <input
        onKeyUp={e => {
          if (!input.value.trim()) {
            return
          }
          dispatch(addChannel(input.value))
        }}
        ref={node => {
          input = node
        }}
      />
      <GoTo />
    </div>
  )
}
AddChannel = connect()(AddChannel)

export default AddChannel
