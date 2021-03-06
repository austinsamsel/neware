import React from 'react'
import PropTypes from 'prop-types'
import CryptoJS from 'crypto-js'
import FontAwesome from 'react-fontawesome'
import '../../vendor/font-awesome/font-awesome.css'
import lockandkey from '../../assets/lockandkey.png'
import c from './FireForm.style.js' // component styles
import { s } from '../ui/Styles.js' // styles utility

let textarea, input

const FireForm = props => (
  <div data-c="FireForm">
    <form
      onSubmit={e => {
        e.preventDefault()
        // disallow blank posts.
        if (!textarea.value.trim()) {
          return
          // TODO: validation message.
        }
        // block if secret is on & passcode field is empty
        if (props.passcodeToggle && !input.value) {
          return
          // TODO: validation message.
        }
        //encrypt
        var cipher = CryptoJS.AES.encrypt(textarea.value, input.value)
        //stringify
        var ciphertext = cipher.toString()

        // set field to password if its not obscured
        if (props.passcodeObscure === false) {
          props.passcodeObscureClick()
        }

        if (input.value.trim()) {
          // if encrypted
          props.onSubmit(ciphertext, true)
        } else {
          // not encrypted
          props.onSubmit(textarea.value, false)
        }

        // unset field to password if its not obscured
        if (props.passcodeObscure === true) {
          props.passcodeObscureClick()
        }
      }}
    >
      <div
        data-t="toggleSecretBtn"
        onClick={props.handleClick}
        style={{
          ...c.toggleBtn,
          ...s.cursor_default,
          ...s.bg_whitesmoke,
          ...s.br0
        }}
      >
        {props.passcodeToggle ? 'Secret' : 'Public'}
        <img src={lockandkey} style={c.image} alt="Lock and Key" />
      </div>
      <div
        style={{
          display: props.passcodeToggle ? 'block' : 'none'
        }}
      >
        <span style={{ ...s.ff_mono, ...s.fs__14 }}>
          <strong>Important:</strong> if you forget your passcode, your stuff
          will be lost forever.
        </span>
        <div style={{ ...s.w_100, ...s.relative }} {...s.df} {...s.aic}>
          <input
            data-t="createPasscode"
            style={{
              ...c.input,
              ...s.br0,
              ...s.w_100,
              ...s.black,
              ...s.bold,
              ...c.small,
              ...s.border_box,
              ...s.resize_none
            }}
            type={props.passcodeObscure ? 'password' : 'text'}
            placeholder="Your passcode"
            minLength="12"
            ref={node => {
              input = node
            }}
          />
          <div onClick={props.passcodeObscureClick} style={c.icon_eye}>
            {props.passcodeObscure ? (
              <FontAwesome name="eye-slash" style={s.dimgray} />
            ) : (
              <FontAwesome name="eye" style={s.dimgray} />
            )}
          </div>
        </div>
      </div>
      <textarea
        style={{
          ...c.input,
          ...s.br0,
          ...s.black,
          ...s.bold,
          ...s.w_100,
          ...c.large,
          ...s.border_box,
          ...s.resize_none
        }}
        ref={node => {
          textarea = node
        }}
        placeholder="Stuff to save for later"
      />
      <button
        data-t="addNoteBtn"
        style={{
          ...c.submitBtn,
          ...s.white,
          ...s.bg_blue,
          ...s.bold,
          ...s.w_100,
          ...s.fs__24,
          ...s.br0
        }}
        action="submit"
      >
        Add Note
      </button>
    </form>
  </div>
)
export default FireForm

FireForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  passcodeToggle: PropTypes.bool,
  passcodeToggleClick: PropTypes.func,
  passcodeObscure: PropTypes.bool.isRequired,
  passcodeObscureClick: PropTypes.func.isRequired
}
