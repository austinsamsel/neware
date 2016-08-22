import { connect } from 'react-redux'
import ChannelForm from '../components/ChannelForm'
import { addChannel } from '../actions'

const mapStateToProps = () => {
  return
}

const mapDispatchToProps = (dispatch) => {
  return {
    onKeyUp: (input) => {
      dispatch(addChannel(input))
    }
  }
}

const AddChannel = connect(
  null,
  mapDispatchToProps
)(ChannelForm)
export default AddChannel
