import { connect } from 'react-redux'
import { undoSave } from '../../actions/notes'
import UndoPrompt from '../../components/notes/UndoPrompt'

const mapDispatchToProps = dispatch => {
  return {
    removeItem: route => {
      dispatch(undoSave(route))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  var pathname = state.routing.location.pathname
  console.log(pathname)
  var channel = pathname.replace(/\//g, '')
  console.log(channel)

  return {
    channel: channel
  }
}

const UndoSave = connect(mapStateToProps, mapDispatchToProps)(UndoPrompt)
export default UndoSave
