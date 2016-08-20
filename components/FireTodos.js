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
    const obj = this.props.todos

    console.log('state of todos', obj)

    // using lodash to map an object (since its not an array)
    return _.map(this.props.todos, (todo, key) => {
      return <FireItem key={key} todo={todo.text} id={key} />
    });
  }

  render() {
    return (
      <div>
        <h4>Create a Todo</h4>
        Add Note for channel/route: {this.props.ch}
        <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
          <div className="form-group">
            <input
              placeholder="Add a todo"
              ref="todoInput"
            />
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
