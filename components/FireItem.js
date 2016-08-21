import React, { PropTypes } from 'react'

const FireItem = ( props ) => {
  return(
    <li>
      {props.todo}
    </li>
  );
}

FireItem.propTypes = {
  todo: PropTypes.string.isRequired
}

export default FireItem
