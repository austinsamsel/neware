import firebase from 'firebase'
import moment from 'moment'
import { store } from '../../store/index.js'
import { encode } from '../../services/Util.js'

const config = {
  apiKey: 'AIzaSyA8Gn5ygzzT8RaAkKF-SfSM4URnk2dsOyQ',
  authDomain: 'anywhere-32729.firebaseapp.com',
  databaseURL: 'https://anywhere-32729.firebaseio.com',
  storageBucket: 'anywhere-32729.appspot.com'
}
firebase.initializeApp(config)

const notesRef = firebase.database().ref('notes')

export const fetchNotes = route => {
  const encode_route = encode(route)
  return function(dispatch) {
    notesRef.child(encode_route).on('value', snapshot => {
      dispatch({
        type: 'FETCH_NOTES',
        payload: snapshot.val()
      })
    })
  }
}

export const decryptNote = (plaintext, id) => {
  return {
    type: 'DECRYPT_NOTE',
    plaintext: plaintext,
    id: id
  }
}

export const clearNotes = () => {
  return {
    type: 'CLEAR_NOTES'
  }
}

export const createNote = (text, route, encrypted) => {
  const encoded_route = encode(route)
  const uid = store.getState().authUser.uid

  return dispatch =>
    notesRef.child(`${encoded_route}`).set({
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      createdAtUserTime: moment(new Date()).valueOf(),
      uid: uid,
      text: text,
      encrypted: encrypted,
      plaintext: ''
    })
}

export const unloadNotes = route => {
  notesRef.child(route).off()
  return {
    type: 'UNLOAD_NOTES_SUCCESS'
  }
}

export const encryptToggle = () => {
  return {
    type: 'PASSCODE_TOGGLE'
  }
}

export const passcodeObscureToggle = () => {
  return {
    type: 'PASSCODE_OBSCURE'
  }
}

export const undoSave = route => {
  return dispatch => notesRef.child(route).remove()
}
