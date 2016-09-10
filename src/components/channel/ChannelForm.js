import React from 'react'
import ChannelSubmit from '~/src/containers/channel/ChannelSubmit'
import About from 'src/components/pages/About'
import Hr from 'src/components/ui/Hr'
import Radium from 'radium'

const s = {
  input: {
    border:'blue solid 3px',
    color: 'black',
    padding:'12px',
    fontSize:'24px',
    height:'60px',
    fontWeight:'bold',
    boxSizing:'border-box',
    maxWidth:'100%',
    borderRadius:'0px',
    '@media (max-width:480px)': {
      width: '100%'
    }
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
    <Hr height='48px' />
    <About />
  </div>
)

ChannelForm.propTypes = {
  onKeyUp: React.PropTypes.func.isRequired
};

export default Radium(ChannelForm)
