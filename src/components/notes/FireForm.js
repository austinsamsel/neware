import React from 'react'
import CryptoJS from 'crypto-js'
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
         
        if (input.value.trim()){
          // if encrypted
          props.onSubmit(ciphertext, true)
        } else {
          // not encrypted
          props.onSubmit(textarea.value, false)
        } 
        textarea.value = ''
        input.value = ''
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
        }}>
          <input
            style={{...s.input, ...s.small}}
            type='password'
            placeholder='Your passcode' 
            ref={node => {
              input = node
            }} 
          />
          <div 
            onClick={props.passcodeObscureClick}
          >
            {console.log(props)} 
            {props.passcodeObscure ? 
             'hide'
            : 'show'
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
