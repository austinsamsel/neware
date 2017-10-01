import _ from 'lodash'

const notes = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NOTES':
      return action.payload
    case 'CLEAR_NOTES':
      return (state = [])
    case 'DECRYPT_NOTE':
      return _.assign({}, state, {
        plaintext: action.plaintext
      })
    default:
      return state
  }
}

export default notes
