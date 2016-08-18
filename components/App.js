import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import { Link, browserHistory } from 'react-router'

const App = ({ children }) => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <button onClick={() => browserHistory.push('/about')}>Go to /about</button>
    {children}
  </div>
)

export default App
