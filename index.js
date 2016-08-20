import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './components/App'
import AddChannel from './containers/AddChannel'
import About from './components/About'
import ChannelContainer from './containers/ChannelContainer'
import todos from './reducers/todos'
import addChannel from './reducers/addChannel'

const reducer = combineReducers({
  addChannel,
  todos,
  routing: routerReducer
})

// Add the reducer to your store on the `routing` key
// add chrome dev tools extension
let createTheStore = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
)

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

let store = createStoreWithMiddleware(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={AddChannel} />
        <Route path="about" component={About} />
        <Route path=":name" component={ChannelContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
