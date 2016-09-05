const initialState = {
  plaintext: '',
  id: '',
}

const decryptNote = (state = initialState, action) => {
  if (action.type === 'DECRYPT_NOTE') {
    return { 
      plaintext: action.plaintext,
      num: action.id
    }
  }
  return state
}
export default decryptNote
