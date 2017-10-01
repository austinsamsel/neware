export const authUser = (uid, anonymous) => {
  console.log('actions...', uid, anonymous)
  return {
    type: 'AUTH_USER',
    uid: uid,
    anonymous: anonymous
  }
}
