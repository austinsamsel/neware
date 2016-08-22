import React, {Component} from 'react'
import FireNotes from '../containers/FireNotes'

const Channel = ({name}) => (
  <div>

    <h1>{name}</h1>

    <FireNotes ch={name} />

  </div>
)

export default Channel
