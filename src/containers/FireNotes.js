import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FireForm from '../components/FireForm';
import FireList from '../components/FireList';

class FireNotes extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.submitHandler = this.submitHandler.bind(this);
    this.onDecrypt = this.onDecrypt.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes(this.props.ch);
  }

  componentWillUnmount() {
    this.props.unloadNotes(this.props.ch);
    this.props.clearNotes();
  }

  submitHandler(input, encrypted){
    this.props.createNote(input, this.props.ch, encrypted)
  }

  onDecrypt(plaintext, id){
    this.props.decryptNote(plaintext, id)
  }

  render() {
    return (
      <div>
        <FireForm onSubmit={this.submitHandler}
          route={this.props.ch}
        />
        <FireList notes={this.props.notes} onDecrypt={this.onDecrypt} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
}

export default connect(
  mapStateToProps,
  actions
)(FireNotes)
