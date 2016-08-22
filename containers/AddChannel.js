import { connect } from 'react-redux'
import AddChannelForm from '../components/AddChannelForm'
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
)(AddChannelForm)
export default AddChannel
