import React, { PropTypes } from 'react'

const Todo = ({ text, route }) => (
  <li>
    {text} -- {route}
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo
