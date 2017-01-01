import React from 'react'
import { render } from 'react-dom'
import {StyleRoot} from 'radium'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './components/App'
import AddChannel from './containers/channel/AddChannel'
import ChannelContainer from './containers/channel/ChannelContainer'
import notes from './reducers/notes'
import addChannel from './reducers/channel'
import passcodeToggle from './reducers/notes/passcodeToggle'
import passcodeObscure from './reducers/notes/passcodeObscure'

const reducer = combineReducers({
  addChannel,
  notes,
  passcodeToggle,
  passcodeObscure,
  routing: routerReducer,
})

// Add the reducer to your store on the `routing` key
// add chrome dev tools extension

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

let store = createStoreWithMiddleware(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <StyleRoot>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={AddChannel} />
          <Route path=":name" component={ChannelContainer} />
        </Route>
      </Router>
    </StyleRoot>
  </Provider>,
  document.getElementById('root')
)
