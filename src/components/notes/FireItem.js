import React, { PropTypes } from 'react'
import FireEncrypted from './FireEncrypted'
import moment from 'moment'
import hourglass from '../../public/hourglass.png'

const FireItem = ( props ) => {
  
  return(
    <li style={{
      listStyle:'none',
      padding:'12px 0',
      borderBottom:'1px solid #eee',
      paddingBottom:'12px',
      overflowWrap: 'break-word'
    }}>
      <p style={{
          fontFamily:'Consolas,monaco,monospace',
          color:'lightseagreen',
        }}
      > 
        <img src={hourglass}
          alt='Timestamp'
          style={{
            width:'16px',
            height:'auto',
            marginRight:'6px',
            verticalAlign:'-3px',
          }}
        />
        { moment(props.createdAt)
          .format('ddd MMM Do YYYY, h:mm a') 
        }
      </p>
      { props.encrypted ?
          <FireEncrypted 
            note={props.note} 
            plaintext={props.plaintext}
            onSubmit={props.onSubmit} 
            id={props.id} 
          />
        : props.note
      }
    </li>
  );
}

FireItem.propTypes = {
  note: PropTypes.string.isRequired,
  plaintext: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default FireItem
