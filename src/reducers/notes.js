const note = (state = {}, action) => {
  switch(action.type){
    case 'DECRYPT_NOTE':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        plaintext: state.plaintext
      })
    default:
      return state
  }
}

const notes = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NOTES':
      return action.payload;
    case 'CLEAR_NOTES':
      return state = [];
    case 'DECRYPT_NOTE':
      return state.map(t =>
        note(t, action)
      )
    default:
      return state
  }
}

export default notes
