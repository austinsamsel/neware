import React from 'react'
import FireItem from './FireItem';
import _ from 'lodash';

const FireList = ( props ) => {
  const renderNotes = () => {
    return _.map(props.notes, (note, key) => {
      return <FireItem key={key} note={note.text} id={key} />
    });
  }
  return(
    <ul>
      { _.reverse(renderNotes()) }
    </ul>
  )

}

// FireList.propTypes = {
//   // notes: PropTypes.arrayOf(PropTypes.shape({
//   //   id: PropTypes.number.isRequired,
//   //   text: PropTypes.string.isRequired
//   // }).isRequired).isRequired
// }

export default FireList
