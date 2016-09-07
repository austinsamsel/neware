import _ from 'lodash'

const passcodeToggle = (state = false, action) => {
  if (action.type === 'PASSCODE_TOGGLE') {
    return _.assign({}, state, {
      passcodeToggle: !state.passcodeToggle
    })
  }
  return state
}
export default passcodeToggle
