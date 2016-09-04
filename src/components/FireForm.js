import React from 'react'

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

let textarea;
const FireForm = ( props ) => (
  <div>
    <form onSubmit={e => {
        e.preventDefault();
        if (!textarea.value.trim()){
          return
        }
        props.onSubmit(textarea.value)
        textarea.value = ''
      }
    }>
      <div style={{
         display:'flex',
         flexWrap: 'wrap',
      }}>
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
