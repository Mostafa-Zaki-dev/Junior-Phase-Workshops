import React, { Component } from 'react';
import Todo from './Todo';
import UpdateTodo from './UpdateTodo';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: {},
    };
  }

  async componentDidMount() {
    const todoId = this.props.match.params.todoId;
    const { data } = await axios.get(`/api/todos/${todoId}`);
    this.setState({ todo: data });
  }

  render() {
    const todo = this.state.todo;

    return (
      <div id="single-todo">
        <Todo todo={todo} />
        <UpdateTodo />
        <Link to="/">Back</Link>
      </div>
    );
  }
}
