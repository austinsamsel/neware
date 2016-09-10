const initialState = {
  ch: ''
}

const addChannel = (state = initialState, action) => {
  if (action.type === 'ADD_CHANNEL') {
    return {
      ch: action.ch
    }
  }
  return state
}
export default addChannel
