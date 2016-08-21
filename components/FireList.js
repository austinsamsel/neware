import React, { PropTypes } from 'react'
import FireItem from './FireItem';
import _ from 'lodash';

const FireList = ( props ) => {
  const renderTodos = () => {
    return _.map(props.todos, (todo, key) => {
      return <FireItem key={key} todo={todo.text} id={key} />
    });
  }
  return(
    <ul>
      {renderTodos()}
    </ul>
  )

}

FireList.propTypes = {
  // todos: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   text: PropTypes.string.isRequired
  // }).isRequired).isRequired
}

export default FireList
