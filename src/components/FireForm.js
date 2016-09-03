import React from 'react'

let input;
const FireForm = ( props ) => (
  <div>
    <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()){
          return
        }
        props.onSubmit(input.value)
        input.value = ''
      }
    }>
      <div>
        <input ref={node => {
          input = node
        }} />
        <button action="submit">Create Note</button>
      </div>
    </form>
  </div>
)
export default FireForm

FireForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};
