export const authUser = (uid, anonymous) => {
  console.log('actions/authUser: ', uid, anonymous)
  return {
    type: 'AUTH_USER',
    uid,
    anonymous
  }
}
