import { connect } from 'react-redux'
import Channel from '../../components/channel/Channel'

const mapStateToProps = (state, ownProps) => {
  return {
    name: ownProps.params.name
  };
}

const ChannelContainer = connect(
  mapStateToProps
)(Channel)
export default ChannelContainer