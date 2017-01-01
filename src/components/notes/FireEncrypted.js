import React, { PropTypes } from 'react'
import CryptoJS from 'crypto-js'
import thekey from '../../public/key.png'

const s = {
  button: {
    backgroundColor:'darkgray',
    color:'white',
    border:'none',
    height:'50px',
    padding:'12px',
    letterSpacing:'0.1rem',
    fontWeight:'bold',
  },
  input: {
    color: 'black',
    padding:'12px',
    fontSize:'16px',
    fontWeight:'bold',
    resize:'none',
    boxSizing:'border-box',
    borderRadius:'0px',
    border:'1px solid darkgray',
  },
  image: {
    height:'auto', 
    width:'20px', 
    marginLeft:'12px',
    verticalAlign:'-5px',
  },
}

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
              style={s.input}
              type='password'
              placeholder='Your secret code'
              ref={(node) => {
                input = node
              }}
            />
            <button style={s.button}>
              Unlock
            </button>
          </span> 
        : props.plaintext
        }
        <img 
          src={thekey}
          alt='lock and key'
          style={s.image} 
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
