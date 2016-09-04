import React, { PropTypes } from 'react'
import FireToggle from '../containers/FireToggle'

const FireItem = ( props ) => {
  
  return(
    <li style={{
      padding:'12px 0'
    }}>
      { props.encrypted ?
          <FireToggle note={props.note} id={props.id} />
        : props.note
      }

    </li>
  );
}

FireItem.propTypes = {
  note: PropTypes.string.isRequired
}

export default FireItem
