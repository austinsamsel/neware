import { connect } from 'react-redux'
import { undoSave } from '../../actions/notes'
import UndoPrompt from '../../components/notes/UndoPrompt'
import { strip_slash } from '../../services/Util.js'

const mapDispatchToProps = dispatch => {
  return {
    removeItem: route => {
      dispatch(undoSave(route))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  var pathname = state.routing.location.pathname
  var channel = strip_slash(pathname)
  return {
    channel: channel
  }
}

const UndoSave = connect(mapStateToProps, mapDispatchToProps)(UndoPrompt)
export default UndoSave
