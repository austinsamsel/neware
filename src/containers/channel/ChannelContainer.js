import { connect } from 'react-redux'
import Channel from '../../components/channel/Channel'

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  console.log('ownProps', ownProps.match.params.id)
  return {
    name: ownProps.match.params.id.toLowerCase()
  }
}

const ChannelContainer = connect(mapStateToProps)(Channel)
export default ChannelContainer
