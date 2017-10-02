export const authUser = (uid, anonymous) => {
  return {
    type: 'AUTH_USER',
    uid: uid,
    anonymous: anonymous
  }
}
