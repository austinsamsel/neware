import React from 'react'
import CryptoJS from 'crypto-js'

 // Encrypt 
 // var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');

 // Decrypt 
 // var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
 // var plaintext = bytes.toString(CryptoJS.enc.Utf8);

const s = {
  input: {
    border:'3px blue solid',
    color: 'black',
    padding:'12px',
    fontSize:'16px',
    fontWeight:'bold',
    resize:'none',
    height:'120px',
    width:'100%',
    boxSizing:'border-box',
    borderRadius:'0px',
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
         
        let encrypted;
        if (input.value.trim()){
          encrypted = true;
        } 
       
        props.onSubmit(ciphertext, encrypted)
        
        textarea.value = ''
        input.value = ''
      }
    }>
      <div style={{
         display:'flex',
         flexWrap: 'wrap',
      }}>

        <input 
          ref={node => {
            input = node
          }} 
        />
        <textarea 
          style={s.input}
          ref={node => {
            textarea = node
          }} 
        ></textarea>

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
      </div>
    </form>
  </div>
)
export default FireForm

FireForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};
