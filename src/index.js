// store
import { store, history } from './store/index.js'
// Redux
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

// React & App
import React from 'react'
import { render } from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './components/App'

//PWA
import registerServiceWorker from './registerServiceWorker'

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
