import React from 'react'
import PropTypes from 'prop-types'
import FireItem from './FireItem'
import _ from 'lodash'

const spacing = {
  margin: '24px 0px 48px',
  paddingLeft: '0'
}

const FireList = props => {
  const renderNotes = () => {
    return _.map(props.notes, (note, key) => {
      return (
        <FireItem
          key={key}
          note={note.text}
          createdAt={note.createdAt}
          plaintext={note.plaintext}
          encrypted={note.encrypted}
          onSubmit={props.onSubmit}
          passcodeObscure={props.passcodeObscure}
          passcodeObscureClick={props.passcodeObscureClick}
          id={key}
        />
      )
    })
  }
  return (
    <ul style={spacing} data-c="FireList">
      {_.reverse(renderNotes())}
    </ul>
  )
}

FireList.propTypes = {
  note: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  passcodeObscure: PropTypes.bool,
  passcodeObscureClick: PropTypes.func
}

export default FireList
