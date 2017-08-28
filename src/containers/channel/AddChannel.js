import { connect } from 'react-redux'
import ChannelForm from '../../components/channel/ChannelForm'
import { addChannel } from '../../actions/channel'

const mapDispatchToProps = dispatch => {
  return {
    onKeyUp: input => {
      dispatch(addChannel(input))
    }
  }
}

const AddChannel = connect(null, mapDispatchToProps)(ChannelForm)
export default AddChannel
