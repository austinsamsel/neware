import React from 'react'
import ChannelSubmit from '../containers/ChannelSubmit'
import About from './About'

const s = {
  input: {
    border:'blue solid',
    borderWidth:'3px 0px 3px 3px',
    color: 'black',
    padding:'12px',
    fontSize:'24px',
    height:'60px',
    fontWeight:'bold',
  }
}

let input;
const ChannelForm = (props) => (
  <div>
    <input
      style={s.input}
      placeholder="Name a channel"
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
    <ChannelSubmit />
    <hr style={{
      height:'72px',
      border:'none'
    }} />
    <About />
  </div>
)
export default ChannelForm

ChannelForm.propTypes = {
  onKeyUp: React.PropTypes.func.isRequired
};
