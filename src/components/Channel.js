import React from 'react'
import FireNotes from '../containers/FireNotes'
import Hr from './ui/Hr'

const Channel = ({name}) => (
  <div>
    <h1 style={{
      fontSize:'36px',
      margin:'0',
    }}>
      <img
        style={{
          width:'40px',
          marginRight:'10px',
        }} 
        src="http://emojipedia-us.s3.amazonaws.com/cache/f8/69/f869f6512b0d7187f4e475fc9aa7f250.png" 
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
