import React from 'react'
import { connect } from 'react-redux'
import { undoSave } from '../../actions/notes'
import Undo from '../../components/notes/Undo'

let UndoSave = ({ dispatch, note }) => {
  const undo = id => {
    dispatch(undoSave(id))
  }
  return <Undo note={note} undo_save={undo} />
}
UndoSave = connect(mapStateToProps)(UndoSave)

export default UndoSave

function mapStateToProps(state) {
  return {
    note: {}
  }
}
