const initialState = {
  uid: null,
  anonymous: null
}

const authUser = (state = initialState, action) => {
  if (action.type === 'AUTH_USER') {
    console.log('reducer/authUser', action.uid)
    return {
      uid: action.uid,
      anonymous: action.anonymous
    }
  }
  return state
}
export default authUser
