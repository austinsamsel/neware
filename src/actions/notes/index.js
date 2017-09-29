import 'whatwg-fetch'
import config from '../../config/index.js'

const posts_url = config.NE_POSTS_URL

export const fetchNotes = route => {
  const encode_route = encodeURIComponent(route)
  return function(dispatch) {
    fetch(`${posts_url}/api/posts?channel=${encode_route}`)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(data => {
        dispatch({
          type: 'FETCH_NOTES',
          payload: data.data
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
  const note = {
    channel: encodeURIComponent(route),
    encrypted: encrypted,
    text: text,
    plaintext: ''
  }
  return function(dispatch) {
    fetch(`${posts_url}/api/posts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(data => {
        dispatch({
          type: 'FETCH_NOTES',
          payload: data.data
        })
      })
  }
}

export const unloadNotes = route => {
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
