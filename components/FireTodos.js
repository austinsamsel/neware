
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FireItem from './FireItem';
import FireForm from './FireForm';
import FireList from './FireList';

class FireTodos extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchTodos(this.props.ch);
  }

  componentWillUnmount() {
    this.props.unloadTodos(this.props.ch);
  }

  submitHandler(input){
    this.props.createTodo(input, this.props.ch)
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
        <FireForm onSubmit={this.submitHandler}
          route={this.props.ch}
        />
        {/* {this.renderTodos()} */}
        <FireList todos={this.props.todos} />
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
