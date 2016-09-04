import { connect } from 'react-redux'
import FireEncrypted from '../components/FireEncrypted'
import { decryptNote } from '../actions'

const mapStateToProps = (state) => {
  return {
    decrypted: state.decryptNote.note
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (note, id) => {
      dispatch(decryptNote(note, id))
    }
  }
}

const FireToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(FireEncrypted)
export default FireToggle
