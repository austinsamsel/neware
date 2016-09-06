import React from 'react'
import FireNotes from '../containers/FireNotes'
import Hr from './ui/Hr'
import thumbsup from '../public/thumbsup.png'

const Channel = ({name}) => (
  <div>
    <h1 style={{
      fontSize:'36px',
      margin:'0',
    }}>
      <img
        style={{
          height:'auto',
          width:'40px',
          marginRight:'10px',
          verticalAlign:'-3px',
        }} 
        src={thumbsup}
        alt=":thumbs up emoji:"
      />
      {name}
    </h1>
    <p style={{
     fontFamily:'Consolas,monaco,monospace',
    }}
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
