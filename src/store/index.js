// Redux
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import reduxThunk from 'redux-thunk'

// Reducers
import notes from '../reducers/notes'
import addChannel from '../reducers/channel'
import passcodeToggle from '../reducers/notes/passcodeToggle'
import passcodeObscure from '../reducers/notes/passcodeObscure'
import authUser from '../reducers/auth'

const reducer = combineReducers({
  addChannel,
  notes,
  passcodeToggle,
  passcodeObscure,
  authUser,
  routing: routerReducer
})

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

export const history = createHistory()

export const store = createStoreWithMiddleware(
  reducer,
  undefined,
  compose(
    applyMiddleware(routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
