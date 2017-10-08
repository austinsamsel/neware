import React from 'react'
import PropTypes from 'prop-types'
import FireEncrypted from './FireEncrypted'
import moment from 'moment'
import hourglass from '../../assets/hourglass.png'
import { s } from '../ui/Styles.js'

const note_item = {
  padding: '12px 0',
  borderBottom: '1px solid #eee',
  paddingBottom: '12px',
  overflowWrap: 'break-word',
  marginBottom: '3rem'
}
const icon_hourglass = {
  width: '16px',
  height: 'auto',
  marginRight: '6px',
  verticalAlign: '-3px'
}

const FireItem = props => {
  return (
    <div style={{ ...note_item, ...s.h_auto }} data-c="FireItem">
      <p style={{ ...s.ff_mono, ...s.lightseagreen }}>
        <img src={hourglass} alt="Timestamp" style={icon_hourglass} />
        {moment(props.createdAt).format('ddd MMM Do YYYY, h:mm a')}
      </p>
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
  // note: PropTypes.string.isRequired,
  // plaintext: PropTypes.string.isRequired,
  passcodeObscure: PropTypes.bool.isRequired,
  passcodeObscureClick: PropTypes.func.isRequired
}

export default FireItem
