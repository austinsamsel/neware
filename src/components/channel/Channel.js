import React from 'react'
import FireNotes from '../../containers/notes/FireNotes'
import Hr from '../ui/Hr'
import thumbsup from '../../public/thumbsup.png'

const h1 = {
  fontSize:'36px',
  margin:'0',
}
const emoji_thumbsup = {
  height:'auto',
  width:'30px',
  marginRight:'10px',
  verticalAlign:'-3px',
}
const mono = {
  fontFamily:'Consolas,monaco,monospace',
}

const Channel = ({name}) => (
  <div>
    <h1 style={h1}>
      <img
        style={emoji_thumbsup} 
        src={thumbsup}
        alt=":thumbs up emoji:"
      />
      {name}
    </h1>
    <p style={mono}
    >   
      Find it later: {window.location.href}
    </p>
    <Hr height='36px' />
    <FireNotes ch={name} />
  </div>
)
export default Channel

Channel.propTypes = {
  name: React.PropTypes.string.isRequired
};
