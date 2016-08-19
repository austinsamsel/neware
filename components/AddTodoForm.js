import React from 'react'

let input;

const AddTodoForm = ({addTodo, ch}) => ( 
  <div>
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      addTodo(input.value, ch)
      input.value = ''
    }}>
      <input ref={node => {
        input = node
      }} />
      <button type="submit">
        Add Todo
      </button>
    </form>
  </div>
)

export default AddTodoForm
