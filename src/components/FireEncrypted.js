import React, { PropTypes } from 'react'
import CryptoJS from 'crypto-js'

let input;
const FireEncrypted = ( props ) => {
  return(
    <div>
      (SECRET): plaintext: {props.plaintext}

      <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()){
            return
          }

          //decrypt
          const bytes  = CryptoJS.AES.decrypt(props.note, input.value);
          const parsed = bytes.toString(CryptoJS.enc.Utf8);

          if (parsed.length > 0){
            props.onDecrypt(parsed, props.id)
            input.value = ''
          }
        }
      }>
        <input
          placeholder="Enter your secret"
          ref={(node) => {
            input = node
            console.log(input)
          }}
        />
        <button>decrypt</button>
      </form>
    </div>
  );
}

FireEncrypted.propTypes = {
  note: PropTypes.string.isRequired,
  onDecrypt: PropTypes.func.isRequired,
  plaintext: PropTypes.string.isRequired,
}

export default FireEncrypted
