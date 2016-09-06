import React, { PropTypes } from 'react'
import CryptoJS from 'crypto-js'

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
          src='http://emojipedia-us.s3.amazonaws.com/cache/2a/80/2a80a079191d67b5f01e8f19eb94942d.png' 
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
