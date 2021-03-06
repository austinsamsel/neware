import { connect } from 'react-redux'
import Channel from '../../components/channel/Channel'
import { decode } from '../../services/Util.js'

const mapStateToProps = (state, ownProps) => {
  const route_name_raw = ownProps.match.params.id.toLowerCase()
  const route_name = decode(route_name_raw)
  return {
    name: route_name
  }
}

const ChannelContainer = connect(mapStateToProps)(Channel)
export default ChannelContainer
