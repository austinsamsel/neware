import React, { PropTypes } from 'react'
import CryptoJS from 'crypto-js'
import FontAwesome from 'react-fontawesome'
import '../../vendor/font-awesome/font-awesome.css';
import thekey from '../../public/key.png'

const s = {
  button: {
    backgroundColor:'darkgray',
    color:'white',
    border:'none',
    height:'44px',
    padding:'12px',
    letterSpacing:'0.1rem',
    fontWeight:'bold',
  },
  input: {
    color: 'black',
    padding:'12px 32px 12px 12px',
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
  gray: {
    color: '#666666'
  },
  icon_eye_input: {
    position:'absolute',
    right:'10px',
    top:'-2px',
  },
  relative: {
    position: 'relative'
  }
}

const FireEncrypted = ( props ) => {
let input;
  return(
    <div data-c='FireEncrypted'>
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
            <span
              style={s.relative}
            >
              <input
                style={s.input}
                type={props.passcodeObscure ? 'password':'text'}
                placeholder='Your passcode'
                ref={(node) => {
                  input = node
                }}
              />
              <div
                onClick={props.passcodeObscureClick}
                style={s.icon_eye_input}
              >
                {props.passcodeObscure ?
                  <FontAwesome
                    name='eye-slash'
                    style={s.gray}
                  />
                : <FontAwesome
                    name='eye'
                    style={s.gray}
                  />
                }
              </div>
            </span>
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
  passcodeObscure: PropTypes.bool.isRequired,
  passcodeObscureClick: PropTypes.func.isRequired,
}

export default FireEncrypted
