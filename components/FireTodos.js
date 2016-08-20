import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FireItem from './FireItem';

class FireTodos extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchTodos(this.props.ch);
  }

  componentWillUnmount() {
    this.props.unloadTodos(this.props.ch);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const input = this.refs.todoInput;
    if (!input.value.trim()){
      return
    }
    this.props.createTodo(input.value, this.props.ch)
    input.value = ''
  }

  renderTodos() {
    // using lodash to map an object (since its not an array)
    return _.map(this.props.todos, (todo, key) => {
      return <FireItem key={key} todo={todo.text} id={key} />
    });
  }

  render() {
    return (
      <div>
        <h4>Create a Todo</h4>
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div>
            <input
              placeholder="Add a todo"
              ref="todoInput"
            />
            <button action="submit">Create Todo</button>
          </div>
        </form>
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}

// container

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps,
  actions
)(FireTodos)
