import React from 'react'
import CryptoJS from 'crypto-js'
import FirePasscode from './FirePasscode'

const s = {
  input: {
    color: 'black',
    padding:'12px',
    fontSize:'16px',
    fontWeight:'bold',
    resize:'none',
    width:'100%',
    boxSizing:'border-box',
    borderRadius:'0px',
    marginBottom:'6px',
  },
  large: {
    height:'120px',
    border:'3px blue solid',
  },
  small: {
    border:'1px darkgray solid'
  }
}

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
          console.log(ciphertext, true)
          //props.onSubmit(ciphertext, true)
        } else {
          // not encrypted
          console.log(textarea.valuel, false)
          //props.onSubmit(textarea.value, false)
        } 
        textarea.value = ''
        input.value = ''
      }
    }>
      <FirePasscode />  
      <textarea 
        style={{...s.input, ...s.large}}
        ref={node => {
          textarea = node
        }}
        placeholder='Stuff to save for later' 
      >
      </textarea>

      <button style={{
          backgroundColor:'blue',
          fontSize:'24px',
          color:'white',
          border:'none',
          height:'60px',
          padding:'0 12px',
          letterSpacing:'0.1rem',
          fontWeight:'bold',
          width:'100%',
        }}
        action='submit'
      >
        Add Note
      </button>
    </form>
  </div>
)
export default FireForm

FireForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};
