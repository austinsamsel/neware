const initialState = {
  note: ''
}

const decryptNote = (state = initialState, action) => {
  if (action.type === 'DECRYPT_NOTE') {
    return {
      note: action.note,
      id: action.id
    }
  }
  return state
}
export default decryptNote
