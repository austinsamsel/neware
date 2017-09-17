import React, { Component } from 'react'
import 'whatwg-fetch'
import config from '../../config/index.js'
const posts_url = config.posts_url('development')

class Online extends Component {
  // TODO: reflect in UI, have fallback.

  componentDidMount() {
    fetch(`${posts_url}/api/`)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error(response.status, ': neware-server')
        }
        return response.json()
      })
      .then(data => {
        console.log('OK: neware-posts')
      })
  }

  render() {
    return <span data-c="Online" />
  }
}

export default Online
