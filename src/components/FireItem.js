import React, { PropTypes } from 'react'
import FireEncrypted from './FireEncrypted'

const FireItem = ( props ) => {
  
  return(
    <li style={{
      padding:'12px 0'
    }}>
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
