import React, {Component} from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FireTodos from './FireTodos'

const Channel = ({name}) => (
  <div>

  <h1>{name}</h1>

  {/* <AddTodo ch={name} /> */}
  {/* <VisibleTodoList /> */}
  <FireTodos ch={name} />

  </div>
)

export default Channel
