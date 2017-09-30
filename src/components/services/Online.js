import config from '../../config/index.js'
const server_url = config.NE_SERVER_URL

const neware_service = () => {
  fetch(`${server_url}`)
    .then(response => {
      if (response.status >= 400) {
        console.log(response.status, ': neware-server')
      }
      return response.json()
    })
    .then(data => {
      //console.log('OK: neware-service')
    })
    .catch(() => {
      console.log('neware-server offline')
    })
}

export default {
  neware_service
}
