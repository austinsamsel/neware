import React, { PropTypes } from 'react'

const FireItem = ( props ) => {
  return(
    <li style={{
      padding:'12px 24px'
    }}>
      {props.note}
    </li>
  );
}

FireItem.propTypes = {
  note: PropTypes.string.isRequired
}

export default FireItem
