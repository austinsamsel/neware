import React from 'react'
import { connect } from 'react-redux'
import AddTodoForm from '../components/AddTodoForm'
import { addTodo } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (input, route) => {
      dispatch(addTodo(input, route))
    }
  };
}

const AddTodo = connect(
  null, // mapStateToProps,  
  mapDispatchToProps
)(AddTodoForm)
export default AddTodo
