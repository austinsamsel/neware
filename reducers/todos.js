// const todo = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return {
//         id: action.id,
//         text: action.text,
//         route: action.route
//       }
//     default:
//       return state
//   }
// }

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // return [
      //   ...state,
      //   todo(undefined, action)
      // ]
      return [ ...state, ...action.payload ];
    case 'FETCH_TODOS':
      return action.payload;
    default:
      return state
  }
}

export default todos
