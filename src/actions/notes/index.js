import 'whatwg-fetch'

export const fetchNotes = route => {
  return function(dispatch) {
    fetch(`https://neware-posts.now.sh/api/posts?channel=${route}`)
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
  return function(dispatch) {
    fetch(
      `https://neware-posts.now.sh/api/posts?channel=${route}&encrypted=${encrypted}&plaintext=${''}&text=${text}`,
      {
        method: 'POST'
      }
    )
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
