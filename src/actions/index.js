import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyA8Gn5ygzzT8RaAkKF-SfSM4URnk2dsOyQ",
  authDomain: "anywhere-32729.firebaseapp.com",
  databaseURL: "https://anywhere-32729.firebaseio.com",
  storageBucket: "anywhere-32729.appspot.com",
};
firebase.initializeApp(config);

const notesRef = firebase.database().ref('notes');

export const fetchNotes = (route) => {
  return function(dispatch) {
    notesRef.child(route).on('value', snapshot => {
      dispatch({
        type: 'FETCH_NOTES',
        payload: snapshot.val()
      })
    });
  }
}

export const decryptNote = (plaintext, id) => {
  return {
    type: 'DECRYPT_NOTE',
    plaintext: plaintext,
    id: id,
  }
}

export const clearNotes = () => {
  return {
    type: 'CLEAR_NOTES'
  }
}

export const createNote = (text, route, encrypted) => {
  return dispatch => notesRef.child(route).push({
    createdAt: firebase.database.ServerValue.TIMESTAMP,
    text: text,
    encrypted: encrypted,
  })
}

export const unloadNotes = (route) => {
  notesRef.child(route).off()
  return {
    type: 'UNLOAD_NOTES_SUCCESS'
  }
}

export const addChannel = (ch) => {
  return {
    type: 'ADD_CHANNEL',
    ch
  }
}
