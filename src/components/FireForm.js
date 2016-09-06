import React from 'react'
import CryptoJS from 'crypto-js'

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
          props.onSubmit(ciphertext, true)
        } else {
          // not encrypted
          props.onSubmit(textarea.value, false)
        } 
        textarea.value = ''
        input.value = ''
      }
    }>
      <div style={{
         display:'flex',
         flexWrap: 'wrap',
      }}>
        <textarea 
          style={{...s.input, ...s.large}}
          ref={node => {
            textarea = node
          }}
          placeholder='Stuff to save for later' 
        >
        </textarea>
        <input
          style={{...s.input, ...s.small}}
          placeholder='Optional. Add a passcode to encrypt it.' 
          ref={node => {
            input = node
          }} 
        />

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
        <span 
          style={{
            margin:'6px 12px 6px',
            fontSize:'14px',
            fontFamily:'Consolas,monaco,monospace',
          }}
        >
          <strong>Important:</strong> if you entered a passcode and you can't remember it later, your stuff will be lost forever. forever. forever.
        </span>
      </div>
    </form>
  </div>
)
export default FireForm

FireForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};
