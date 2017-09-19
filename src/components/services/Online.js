import config from '../../config/index.js'
const posts_url = config.posts_url('development')

const posts_service = () => {
  fetch(`${posts_url}/api/`)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error(response.status, ': neware-server')
      }
      return response.json()
    })
    .then(data => {
      //console.log('OK: neware-posts')
    })
}

export default {
  posts_service
}
