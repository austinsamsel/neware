import _ from 'lodash'

const initialState = {
  bool: false
}

const passcodeToggle = (state = initialState, action) => {
  if (action.type === 'PASSCODE_TOGGLE') {
    return _.assign({}, state, {
      bool: !state.bool
    })
  }
  return state
}
export default passcodeToggle
