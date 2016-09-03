import { connect } from 'react-redux'
import GoToChannel from '../components/GoToChannel'

const mapStateToProps = (state) => {
  return {
    ch: state.addChannel.ch
  };
}

const GoTo = connect(
  mapStateToProps
)(GoToChannel)
export default GoTo
