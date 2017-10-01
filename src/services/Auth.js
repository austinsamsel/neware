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
      const auth = {
        anonymous: user.isAnonymous,
        uid: user.uid
      }
      store.dispatch(authUser(auth))
      return auth
    } else {
      const auth = {
        anonymous: null,
        uid: false
      }
      console.log(auth)
      return auth
    }
  })
}

export default {
  anonymous,
  state
}
