import React, { PropTypes } from 'react'
import FireEncrypted from './FireEncrypted'
import moment from 'moment'
import hourglass from '../../public/hourglass.png'

const li_item = {
  listStyle:'none',
  padding:'12px 0',
  borderBottom:'1px solid #eee',
  paddingBottom:'12px',
  overflowWrap: 'break-word'
}
const li_p = {
  fontFamily:'Consolas,monaco,monospace',
  color:'lightseagreen',
}
const icon_hourglass = {
  width:'16px',
  height:'auto',
  marginRight:'6px',
  verticalAlign:'-3px',
}

const FireItem = ( props ) => {
  return(
    <li style={li_item}>
      <p style={li_p}
      >
        <img src={hourglass}
          alt='Timestamp'
          style={icon_hourglass}
        />
        { moment(props.createdAt).format('ddd MMM Do YYYY, h:mm a') }
      </p>
      { props.encrypted ?
          <FireEncrypted
            note={props.note}
            plaintext={props.plaintext}
            onSubmit={props.onSubmit}
            id={props.id}
            passcodeObscure={props.passcodeObscure}
            passcodeObscureClick={props.passcodeObscureClick}
          />
        : props.note
      }
    </li>
  );
}

FireItem.propTypes = {
  note: PropTypes.string.isRequired,
  plaintext: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  passcodeObscure: PropTypes.bool.isRequired,
  passcodeObscureClick: PropTypes.func.isRequired,
}

export default FireItem
