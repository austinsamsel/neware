require('dotenv').config()

const NE_POSTS_DEVELOPMENT = 'http://localhost:8080'
const NE_POSTS_PRODUCTION = 'https://neware-posts.now.sh'

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

const posts_url = environment => {
  let posts_url
  if (environment === 'development') {
    posts_url = NE_POSTS_DEVELOPMENT
  }
  if (environment === 'production') {
    posts_url = NE_POSTS_PRODUCTION
  }
  if (!process.env.LOCAL_DEV) {
    // default to production url if in production
    posts_url = NE_POSTS_PRODUCTION
  }
  return posts_url
}

module.exports = {
  NE_POSTS_DEVELOPMENT,
  NE_POSTS_PRODUCTION,
  e2e_client_url,
  posts_url
}