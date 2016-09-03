import React, { PropTypes } from 'react'

const FireItem = ( props ) => {
  return(
    <li>
      {props.note}
    </li>
  );
}

FireItem.propTypes = {
  note: PropTypes.string.isRequired
}

export default FireItem
