import React from 'react'
import CryptoJS from 'crypto-js'
import lockandkey from '../public/lockandkey.png'

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
          //console.log(ciphertext, true)
          props.onSubmit(ciphertext, true)
        } else {
          // not encrypted
          //console.log(textarea.valuel, false)
          props.onSubmit(textarea.value, false)
        } 
        textarea.value = ''
        input.value = ''
      }
    }>     
      <button
        onClick={props.handleClick} 
        style={{
          background:'#eee',
          borderRadius:'3px',
          padding:'6px 12px',
          marginBottom:'6px',
          float:'right',
          display: props.passcodeToggle ? 'block' : 'block',
        }}
      >
        Keep it secret? 
        <img src={lockandkey}
          style={{
            height:'auto',
            width:'20px',
            marginLeft:'6px',
            verticalAlign:'-3px' 
          }}
          alt="Lock and Key"
        />
      </button>
      <div style={{
        display: props.passcodeToggle ? 'block' : 'none',
      }}>
        <span 
          style={{
            margin:'6px 12px 6px',
            fontSize:'14px',
            fontFamily:'Consolas,monaco,monospace',
          }}
        >
          <strong>Important:</strong> if you entered a passcode and you can't remember it later, your stuff will be lost forever. forever. forever.
        </span>
        <input
          style={{...s.input, ...s.small}}
          placeholder='Add a passcode for encryption' 
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
  onSubmit: React.PropTypes.func.isRequired,
  handleClick: React.PropTypes.func.isRequired,
  //passcodeToggle: React.Proptypes.bool.isRequired,
};
