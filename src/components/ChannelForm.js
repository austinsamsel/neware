import React from 'react'
import ChannelSubmit from '../containers/ChannelSubmit'
import About from './About'
import Hr from './ui/Hr'

const s = {
  input: {
    border:'blue solid',
    borderWidth:'3px 3px 3px 3px',
    color: 'black',
    padding:'12px',
    fontSize:'24px',
    height:'60px',
    fontWeight:'bold',
    boxSizing:'border-box',
    maxWidth:'100%'
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
    <Hr height='72px' />
    <About />
  </div>
)
export default ChannelForm

ChannelForm.propTypes = {
  onKeyUp: React.PropTypes.func.isRequired
};
