import _ from 'lodash'

const notes = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NOTES':
      return action.payload;
    case 'CLEAR_NOTES':
      return state = [];
    case 'DECRYPT_NOTE':
      return _.mapValues(state, (note, index) => {
        if (index === action.id) {
          return _.assign({}, note, {
            plaintext: action.plaintext
          })
        }
        return note
      })
    default:
      return state
  }
}

export default notes
