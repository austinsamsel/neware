import React from 'react'
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
  small: {
    border:'1px darkgray solid'
  }
}

let input;
const FirePasscode = ( props ) => (
  <div>
    <span 
      style={{
        background:'#eee',
        borderRadius:'3px',
        padding:'6px 12px',
        marginBottom:'6px',
        float:'right',
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
    </span>
    <div style={{display:'block'}}>
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
  </div>
)
export default FirePasscode

FirePasscode.propTypes = {
  //onSubmit: React.PropTypes.func.isRequired
};
