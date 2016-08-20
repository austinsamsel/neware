import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyA8Gn5ygzzT8RaAkKF-SfSM4URnk2dsOyQ",
  authDomain: "anywhere-32729.firebaseapp.com",
  databaseURL: "https://anywhere-32729.firebaseio.com",
  storageBucket: "anywhere-32729.appspot.com",
};
firebase.initializeApp(config);


const notesRef = firebase.database().ref('todos');

export function fetchTodos() {
  return function(dispatch) {
    console.log('called')
    notesRef.on('value', snapshot => {
      console.log(snapshot.val())
      dispatch({
        type: 'FETCH_TODOS',
        payload: snapshot.val()
      })
    });
  }
}

export function createTodo(text) {
  return dispatch => notesRef.push(text)
}

// let nextTodoId = 0
// export const addTodo = (text, route) => {
//   return {
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text: text,
//     route: route
//   }
// }

export const addChannel = (ch) => {
  return {
    type: 'ADD_CHANNEL',
    ch
  }
}
