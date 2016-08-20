import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FireItem from './FireItem';

class FireTodos extends Component {
  // state = { todo: '' };
  constructor(props){
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.props.fetchTodos();
  }

  handleInputChange(event) {
    this.setState({ todo: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.props.createTodo(this.state.todo)
  }

  renderTodos() {
    return _.map(this.props.todos, (todo, key) => {
      return <FireItem key={key} todo={todo} id={key} />
    });
  }

  render() {
    return (
      <div>
        <h4>Create a Todo</h4>
        <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Add a todo"
              value={this.state.todo}
              onChange={this.handleInputChange.bind(this)} />
            <button action="submit" className="btn btn-primary">Create Todo</button>
          </div>
        </form>
        <ul className="list-group">
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

export default connect(mapStateToProps, actions)(FireTodos)

