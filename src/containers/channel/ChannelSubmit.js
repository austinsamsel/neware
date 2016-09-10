import { connect } from 'react-redux'
import ChannelBtn from '../../components/channel/ChannelBtn'

const mapStateToProps = (state) => {
  return {
    ch: state.addChannel.ch
  };
}

const ChannelSubmit = connect(
  mapStateToProps
)(ChannelBtn)
export default ChannelSubmit
