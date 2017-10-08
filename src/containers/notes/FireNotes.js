import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/notes'
import FireForm from '../../components/notes/FireForm'
import FireItem from '../../components/notes/FireItem'
import UndoSave from './UndoSave.js'

class FireNotes extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.submitHandler = this.submitHandler.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.passcodeObscureClick = this.passcodeObscureClick.bind(this)
    this.showFireContent = this.showFireContent.bind(this)
  }

  componentDidMount() {
    this.props.fetchNotes(this.props.ch)
  }

  componentWillUnmount() {
    this.props.unloadNotes(this.props.ch)
    this.props.clearNotes()
  }

  submitHandler(input, encrypted) {
    console.log(input, encrypted)
    this.props.createNote(input, this.props.ch, encrypted)
  }

  onSubmit(plaintext, id) {
    this.props.decryptNote(plaintext, id)
  }

  handleClick() {
    this.props.encryptToggle()
  }

  passcodeObscureClick() {
    this.props.passcodeObscureToggle()
  }

  showFireContent = () => {
    if (this.props.notes < 1) {
      return (
        <FireForm
          onSubmit={this.submitHandler}
          passcodeToggle={this.props.passcodeToggle}
          handleClick={this.handleClick}
          passcodeObscure={this.props.passcodeObscure}
          passcodeObscureClick={this.passcodeObscureClick}
          route={this.props.ch}
        />
      )
    } else {
      return (
        <div>
          <FireItem
            note={this.props.notes.text}
            createdAt={this.props.notes.createdAt}
            plaintext={this.props.notes.plaintext}
            encrypted={this.props.notes.encrypted}
            onSubmit={this.onSubmit}
            passcodeObscure={this.props.passcodeObscure}
            passcodeObscureClick={this.passcodeObscureClick}
          />
          {this.props.authedUser === this.props.notes.uid ? <UndoSave /> : ''}
        </div>
      )
    }
  }

  render() {
    return <div>{this.showFireContent()}</div>
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    passcodeToggle: state.passcodeToggle.bool,
    passcodeObscure: state.passcodeObscure.bool,
    authedUser: state.authUser.uid
  }
}

export default connect(mapStateToProps, actions)(FireNotes)
