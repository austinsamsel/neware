import firebase from 'firebase'

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
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // console.log('anonymous: ', isAnonymous, 'uid: ', uid);
    } else {
      // User is signed out.
    }
  })
}

export default {
  anonymous,
  state
}
