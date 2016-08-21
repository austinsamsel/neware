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
        <button action="submit">Create Todo</button>
      </div>
    </form>
  </div>
)
export default FireForm

FireForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  route: React.PropTypes.string.isRequired // maybe not necessary
};
