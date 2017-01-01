import _ from 'lodash'

const initialState = {
  bool: false
}

const passcodeObscure = (state = initialState, action) => {
  if (action.type === 'PASSCODE_OBSCURE') {
    return _.assign({}, state, {
      bool: !state.bool
    })
  }
  return state
}
export default passcodeObscure
