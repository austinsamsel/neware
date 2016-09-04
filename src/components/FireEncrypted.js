import React, { PropTypes } from 'react'
import CryptoJS from 'crypto-js'

let input;
const FireEncrypted = ( props ) => {
  return(
    <div>
      {
       /* if secret
        *   show the input and button
        * else 
        *   show the decrypted message.
        *   and hide the input and button
        *   and show a lock button.
        * */
      }
      (SECRET): {props.decrypted}

      <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()){
            return
          }
          
          //decrypt
          var bytes  = CryptoJS.AES.decrypt(props.note, input.value);
          var plaintext = bytes.toString(CryptoJS.enc.Utf8);
           
          if (plaintext.length > 0){
            // console.log(plaintext, props.id)
            props.onSubmit(plaintext, true)
          }
          input.value = ''
        }
      }>
        <input
          placeholder="Enter your secret"
          ref={node => {
            input = node
          }}
        />
        <button>decrypt</button>
      </form>
    </div>
  );
}

FireEncrypted.propTypes = {
  note: PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  decrypted: React.PropTypes.string.isRequired,
}

export default FireEncrypted
