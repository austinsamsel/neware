import React from 'react'
import PropTypes from 'prop-types'
import FireEncrypted from './FireEncrypted'
import TimeLeft from './TimeLeft'
import { s } from '../ui/Styles.js'

const note_item = {
  padding: '12px 0',
  borderBottom: '1px solid #eee',
  paddingBottom: '12px',
  overflowWrap: 'break-word',
  marginBottom: '3rem'
}

const FireItem = props => {
  return (
    <div
      data-c="FireItem"
      style={{
        ...note_item,
        ...s.h_auto
      }}
    >
      <TimeLeft createdAt={props.createdAt} />
      <span data-t="noteContent">
        {props.encrypted ? (
          <FireEncrypted
            note={props.note}
            plaintext={props.plaintext}
            onSubmit={props.onSubmit}
            passcodeObscure={props.passcodeObscure}
            passcodeObscureClick={props.passcodeObscureClick}
          />
        ) : (
          props.note
        )}
      </span>
    </div>
  )
}

FireItem.propTypes = {
  note: PropTypes.string.isRequired,
  plaintext: PropTypes.string.isRequired,
  passcodeObscure: PropTypes.bool.isRequired,
  passcodeObscureClick: PropTypes.func.isRequired
}

export default FireItem
