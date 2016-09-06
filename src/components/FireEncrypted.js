import React, { PropTypes } from 'react'
import CryptoJS from 'crypto-js'
import thekey from '../public/key.png'

const FireEncrypted = ( props ) => {
let input;
  return(
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()){
            return
          }

          //decrypt
          const bytes  = CryptoJS.AES.decrypt(props.note, input.value);
          const parsed = bytes.toString(CryptoJS.enc.Utf8);

          if (parsed.length > 0){
            props.onSubmit(parsed, props.id)
            input.value = ''
          }
        }
      }>
        {props.plaintext === '' ?
          <span>
            <input
              placeholder='Your secret code'
              ref={(node) => {
                input = node
              }}
            />
            <button>decrypt</button>
          </span> 
        : props.plaintext
        }
        <img 
          src={thekey}
          alt='lock and key'
          style={{
            height:'auto', 
            width:'20px', 
            marginLeft:'12px',
            verticalAlign:'-5px',
          }} 
        /> 
      </form>
    </div>
  );
}

FireEncrypted.propTypes = {
  note: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  plaintext: PropTypes.string.isRequired,
}

export default FireEncrypted
