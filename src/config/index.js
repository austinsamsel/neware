require('dotenv').config()

const NE_POSTS_URL = 'https://neware-posts.now.sh'
// neware-posts url:
// | 'https://neware-posts.now.sh'
// | 'http://localhost:8080'

const NE_SERVER_URL = 'https://neware-server.now.sh'
// neware-server url:
// | 'https://neware-posts.now.sh'
// | 'http://localhost:5000'

const e2e_client_url = environment => {
  let client_url
  if (environment === 'development') {
    client_url = process.env.URL_DEVELOPMENT
  }
  if (environment === 'staging') {
    client_url = process.env.URL_STAGING
  }
  if (environment === 'production') {
    client_url = process.env.URL_PRODUCTION
  }
  return client_url
}

module.exports = {
  NE_POSTS_URL,
  NE_SERVER_URL,
  e2e_client_url
}
