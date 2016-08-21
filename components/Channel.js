import React, {Component} from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FireTodos from '../containers/FireTodos'

const Channel = ({name}) => (
  <div>

    <h1>{name}</h1>

    <FireTodos ch={name} />

  </div>
)

export default Channel
