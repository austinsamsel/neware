import React from 'react'
import PropTypes from 'prop-types'
import CryptoJS from 'crypto-js'
import FontAwesome from 'react-fontawesome'
import '../../vendor/font-awesome/font-awesome.css'
import thekey from '../../assets/key.png'
import s from '../ui/Styles.js' // styles utility

const c = {
  button: {
    height: '44px',
    padding: '12px'
  },
  input: {
    padding: '12px 32px 12px 12px',
    border: '1px solid darkgray'
  },
  image: {
    width: '20px',
    marginLeft: '12px',
    verticalAlign: '-5px'
  },
  icon_eye_input: {
    right: '10px',
    top: '-2px'
  }
}

const FireEncrypted = props => {
  let input
  return (
    <div data-c="FireEncrypted">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }

          //decrypt
          const bytes = CryptoJS.AES.decrypt(props.note, input.value)
          const parsed = bytes.toString(CryptoJS.enc.Utf8)

          if (parsed.length > 0) {
            props.onSubmit(parsed, props.id)
            input.value = ''
          }
        }}
      >
        {props.plaintext === '' ? (
          <span>
            <span style={s.relative}>
              <input
                style={{
                  ...c.input,
                  ...s.black,
                  ...s.bold,
                  ...s.border_box,
                  ...s.br0,
                  ...s.resize_none
                }}
                type={props.passcodeObscure ? 'password' : 'text'}
                placeholder="Your passcode"
                ref={node => {
                  input = node
                }}
              />
              <div
                onClick={props.passcodeObscureClick}
                style={{ ...c.icon_eye_input, ...s.absolute }}
              >
                {props.passcodeObscure ? (
                  <FontAwesome name="eye-slash" style={s.dimgray} />
                ) : (
                  <FontAwesome name="eye" style={s.dimgray} />
                )}
              </div>
            </span>
            <button
              style={{
                ...c.button,
                ...s.bg_darkgray,
                ...s.white,
                ...s.bn,
                ...s.bold,
                ...s.tracked_spaced
              }}
            >
              Unlock
            </button>
          </span>
        ) : (
          props.plaintext
        )}
        <img
          src={thekey}
          alt="lock and key"
          style={{ ...c.image, ...s.h_auto }}
        />
      </form>
    </div>
  )
}

FireEncrypted.propTypes = {
  note: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  plaintext: PropTypes.string.isRequired,
  passcodeObscure: PropTypes.bool.isRequired,
  passcodeObscureClick: PropTypes.func.isRequired
}

export default FireEncrypted
