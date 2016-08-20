import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FireItem extends Component {
  handleClick() {
    this.props.deleteTodo(this.props.id);
  }

  render() {
    return (
      <li className="list-group-item">
        {this.props.todo}
        <button
          onClick={this.handleClick.bind(this)}
          className="btn btn-danger right">
          Delete
        </button>
      </li>
    );
  }
}

export default connect(null, actions)(FireItem);

