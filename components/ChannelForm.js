import React from 'react'
import GoTo from '../containers/GoTo'

let input;
const ChannelForm = (props) => (
  <div>
    <div>
      create or go to a channel:
    </div>
    {console.log(props)}
    <input
      onKeyUp={e => {
        if (!input.value.trim()) {
          return
        }
        props.onKeyUp(input.value)
      }}
      ref={node => {
        input = node
      }}
    />
    <GoTo />
  </div>
)
export default ChannelForm

ChannelForm.propTypes = {
  onKeyUp: React.PropTypes.func.isRequired
};
