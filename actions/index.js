let nextTodoId = 0
export const addTodo = (text, route) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text,
    route: route
  }
}

export const addChannel = (ch) => {
  return {
    type: 'ADD_CHANNEL',
    ch
  }
}
