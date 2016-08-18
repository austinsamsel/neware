let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

// let nextChannelId = 0
// export const addChannel = (text) => {
//   return {
//     type: 'ADD_CHANNEL',
//     id: nextChannelId++,
//     text
//   }
// }

export const addChannel = (ch) => {
  return {
    type: 'ADD_CHANNEL',
    ch
  }
}
