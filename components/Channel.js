import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const Channel = ({name}) => (
  <div>
  <h1>{name}</h1>

  <AddTodo ch={name} />
  <VisibleTodoList />
  
  </div>
)

export default Channel
