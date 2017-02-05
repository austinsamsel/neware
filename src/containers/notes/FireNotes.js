import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/notes'
import FireForm from '../../components/notes/FireForm'
import FireList from '../../components/notes/FireList'

class FireNotes extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.submitHandler = this.submitHandler.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.passcodeObscureClick = this.passcodeObscureClick.bind(this)
    this.showFireForm = this.showFireForm.bind(this)
  }

  componentDidMount() {
    this.props.fetchNotes(this.props.ch)
  }

  componentWillUnmount() {
    this.props.unloadNotes(this.props.ch)
    this.props.clearNotes()
  }

  submitHandler(input, encrypted){
    this.props.createNote(input, this.props.ch, encrypted)
  }

  onSubmit(plaintext, id){
    this.props.decryptNote(plaintext, id)
  }

  handleClick(){
    this.props.encryptToggle()
  }

  passcodeObscureClick(){
    this.props.passcodeObscureToggle()
  }

  showFireForm() {
    if (this.props.notes < 1 ){
      return <FireForm
        onSubmit={this.submitHandler}
        passcodeToggle={this.props.passcodeToggle}
        handleClick={this.handleClick}
        passcodeObscure={this.props.passcodeObscure}
        passcodeObscureClick={this.passcodeObscureClick}
        route={this.props.ch}
      />
    }
  }

  render() {
    return (
      <div>

        { this.showFireForm() }

        <FireList
          notes={this.props.notes}
          onSubmit={this.onSubmit}
          passcodeObscure={this.props.passcodeObscure}
          passcodeObscureClick={this.passcodeObscureClick}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    passcodeToggle: state.passcodeToggle.bool,
    passcodeObscure: state.passcodeObscure.bool,
  };
}

export default connect(
  mapStateToProps,
  actions
)(FireNotes)
