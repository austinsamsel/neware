import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FireItem from '../components/FireItem';
import FireForm from '../components/FireForm';
import FireList from '../components/FireList';

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
    this.props.clearTodos();
  }

  submitHandler(input){
    this.props.createTodo(input, this.props.ch)
  }

  render() {
    return (
      <div>
        <FireForm onSubmit={this.submitHandler}
          route={this.props.ch}
        />
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
