import firebase from 'firebase'
import { store } from '../store/index.js'
import { authUser } from '../actions/auth'

const anonymous = () => {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // console.log(errorCode, errorMessage);
    })
}

const state = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      const anonymous = user.isAnonymous
      const uid = user.uid
      store.dispatch(authUser(uid, anonymous))
    } else {
      console.log('not authed...')
    }
  })
}

export default {
  anonymous,
  state
}
