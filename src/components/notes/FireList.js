import React from 'react'
import FireItem from './FireItem';
import _ from 'lodash';

const FireList = ( props ) => {
  const renderNotes = () => {
    return _.map(props.notes, (note, key) => {
      return <FireItem key={key} 
               note={note.text}
               createdAt={note.createdAt}
               plaintext={note.plaintext} 
               encrypted={note.encrypted}
               onSubmit={props.onSubmit}
               id={key} 
             />
    });
  }
  return(
    <ul style={{
      margin:'24px 0px 48px',
      paddingLeft:'0',
    }}>
      { _.reverse(renderNotes()) }
    </ul>
  )

}

FireList.propTypes = {
  // TODO: requires, notes, but validation triggers warning
  // notes: React.PropTypes.object.isRequired
}

export default FireList
