import React, { PropTypes } from 'react'
import CryptoJS from 'crypto-js'
import FontAwesome from 'react-fontawesome'
import '../../vendor/font-awesome/font-awesome.css';
import lockandkey from '../../public/lockandkey.png'
import s from './FireForm.style.js'

let textarea, input;

const FireForm = ( props ) => (
  <div>
    <form onSubmit={e => {
        e.preventDefault();
        // disallow blank posts.
        if (!textarea.value.trim()){
          return
          // TODO: flash messages.
        }
        // block if secret is on & passcode field is empty
        if (props.passcodeToggle && !input.value){
          return
          // TODO: flash messages.
        }
        
        //encrypt
        var cipher = CryptoJS.AES.encrypt(textarea.value, input.value)
        //stringify
        var ciphertext = cipher.toString()

        // set field to password if its not obscured
        if (props.passcodeObscure === false){
          props.passcodeObscureClick()
        }

        if (input.value.trim()){
          // if encrypted
          props.onSubmit(ciphertext, true)
        } else {
          // not encrypted
          props.onSubmit(textarea.value, false)
        }
        textarea.value = ''
        input.value = ''

        // unset field to password if its not obscured
        if (props.passcodeObscure === true){
          props.passcodeObscureClick()
        }
      }
    }>
      <div
        onClick={props.handleClick}
        style={s.toggleBtn}
      >
        {props.passcodeToggle ?
         'Secret'
        : 'Public'
        }
        <img src={lockandkey}
          style={s.image}
          alt="Lock and Key"
        />
      </div>
      <div style={{
        display: props.passcodeToggle ? 'block' : 'none',
      }}>
        <span style={s.serif}>
          <strong>Important:</strong> if you forget your passcode, your stuff will be lost forever.
        </span>
        <div
          style={s.flex_wrap}>
          <input
            style={{...s.input, ...s.small}}
            type={props.passcodeObscure ? 'password':'text'}
            placeholder='Your passcode'
            minLength='12'
            ref={node => {
              input = node
            }}
          />
          <div
            onClick={props.passcodeObscureClick}
            style={s.icon_eye}
          >
            {props.passcodeObscure ?
              <FontAwesome
                name='eye-slash'
                style={s.gray}
              />
            : <FontAwesome
                name='eye'
                style={s.gray}
              />
            }
          </div>
        </div>
      </div>
      <textarea
        style={{...s.input, ...s.large}}
        ref={node => {
          textarea = node
        }}
        placeholder='Stuff to save for later'
      >
      </textarea>
      <button style={s.submitBtn}
        action='submit'
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
  passcodeObscureClick: PropTypes.func.isRequired,
};
