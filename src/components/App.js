import React from 'react'
// import PropTypes from 'prop-types'
import { Route, Switch, Link } from 'react-router-dom'
import Online from './services/Online.js'

import AddChannel from '../containers/channel/AddChannel'
import ChannelContainer from '../containers/channel/ChannelContainer'

Online.posts_service()

const td_none = {
  textDecoration: 'none'
}
const logo = {
  color: 'fuchsia',
  fontSize: '40px',
  fontWeight: 'bold',
  margin: '24px 0 0'
}
const subtitle = {
  fontSize: '16px',
  fontWeight: '500',
  color: 'darkgray',
  margin: '0 0 48px 0'
}

const App = props => (
  <div data-c="App">
    <Link to="/" style={td_none}>
      <span style={logo}>NEWARE</span>
    </Link>
    <h2 style={subtitle}>Save it for later from anywhere.</h2>
    <Switch>
      {/* {props.children} */}
      <Route exact path="/" component={AddChannel} /> */}
      <Route path=":name" component={ChannelContainer} />
    </Switch>
  </div>
)
export default App

// App.propTypes = {
//   children: PropTypes.object.isRequired
// }
