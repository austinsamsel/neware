const notes = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NOTES':
      return action.payload;
    case 'CLEAR_NOTES':
      return state = [];
    default:
      return state
  }
}

export default notes
