import React from 'react'
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
        if (!textarea.value.trim()){
          return
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
        <span
          style={s.serif}
        >
          <strong>Important:</strong> if you forget your passcode, your stuff will be lost forever.
        </span>
        <div
          style={{
            display:'flex',
            alignItems:'center',
            width:'100%',
            position:'relative'
        }}>
          <input
            style={{...s.input, ...s.small}}
            type={props.passcodeObscure ? 'password':'text'}
            placeholder='Your passcode'
            ref={node => {
              input = node
            }}
          />
          <div
            onClick={props.passcodeObscureClick}
            style={{
              position:'absolute',
              right:'10px',
              top:'13px'
            }}
          >
            {props.passcodeObscure ?
              <FontAwesome
                name='eye-slash'
                style={{ color: '#666666' }}
              />
            : <FontAwesome
                name='eye'
                style={{ color: '#666666' }}
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
  onSubmit: React.PropTypes.func.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};
