import React from 'react'
import CryptoJS from 'crypto-js'
import lockandkey from '../../public/lockandkey.png'

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
  },
  toggleBtn: { 
    background:'#eee',
    borderRadius:'3px',
    padding:'6px 12px',
    marginBottom:'6px',
    float:'right',
    backgroundColor:'#eee',
    border:'none', 
  },
  image: { 
    height:'auto',
    width:'20px',
    marginLeft:'6px',
    verticalAlign:'-3px',
  },
  submitBtn: { 
    backgroundColor:'blue',
    fontSize:'24px',
    color:'white',
    border:'none',
    height:'60px',
    padding:'0 12px',
    letterSpacing:'0.1rem',
    fontWeight:'bold',
    width:'100%',
  },
  serif: { 
    fontSize:'14px',
    fontFamily:'Consolas,monaco,monospace',
  },
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
        //opacity: props.passcodeToggle ? '1.0' : '0.0',
        display: props.passcodeToggle ? 'block' : 'none',
      }}>
        <span 
          style={s.serif}
        >
          <strong>Important:</strong> if you forget your passcode, your stuff will be lost forever.
        </span>
        <input
          style={{...s.input, ...s.small}}
          placeholder='Your passcode' 
          ref={node => {
            input = node
          }} 
        />
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
  //passcodeToggle: React.Proptypes.bool.isRequired,
};
