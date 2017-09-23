// Redux
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from 'react-router-redux'
import reduxThunk from 'redux-thunk'

// React & App
import React from 'react'
import { render } from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './components/App'

// Reducers
import notes from './reducers/notes'
import addChannel from './reducers/channel'
import passcodeToggle from './reducers/notes/passcodeToggle'
import passcodeObscure from './reducers/notes/passcodeObscure'

//PWA
import registerServiceWorker from './registerServiceWorker'

const reducer = combineReducers({
  addChannel,
  notes,
  passcodeToggle,
  passcodeObscure,
  routing: routerReducer
})

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

const history = createHistory()

const store = createStoreWithMiddleware(
  reducer,
  undefined,
  compose(
    applyMiddleware(routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
