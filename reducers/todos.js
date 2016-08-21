
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, ...action.payload ];
    case 'FETCH_TODOS':
      return action.payload;
    case 'CLEAR_TODOS':
      return state = [];
    default:
      return state
  }
}

export default todos
