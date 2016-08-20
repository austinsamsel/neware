import React, {Component} from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FireTodos from './FireTodos'

const Channel = ({name}) => (
  <div>

  <h1>{name}</h1>

  <AddTodo ch={name} />
  {/* <VisibleTodoList /> */}
  <FireTodos />

  </div>
)

export default Channel


// class Channel extends Component {
//   constructor(props){
//     super(props)
//   }
//
//   componentWillMount() {
//     actions.fetchTodos()
//   }
//
//   render() {
//     return (    
//       <div>
//       <h1>{name}</h1>
//
//       <AddTodo ch={name} />
//       <VisibleTodoList />
//
//       </div>
//     )
//   }
// }
// export default Channel
