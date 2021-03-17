import React, { Component } from 'react';
import Todo from './Todo';
import UpdateTodo from './UpdateTodo';
import axios from 'axios';
import { Link } from 'react-router-dom';
import db from './firebase-config';

export default class SingleTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: {},
    };
    this.updateTodo = this.updateTodo.bind(this);
  }

  async componentDidMount() {
    /* comment in what is commented out if you want to use the local server api functionality */

    const todoId = this.props.match.params.todoId;
    // const { data } = await axios.get(`/api/todos/${todoId}`);
    const doc = await db.collection('todos').doc(todoId).get();
    console.log('docId: ', doc.id, '/doc data: ', doc.data());
    const id = doc.id;
    const data = doc.data();
    this.setState({ todo: { id, ...data } });
  }

  updateTodo(updatedTodo) {
    this.setState({
      todo: updatedTodo,
    });
  }
  render() {
    const todo = this.state.todo;

    return (
      <div id="single-todo">
        <Todo todo={todo} />
        <UpdateTodo todo={todo} updateTodo={this.updateTodo} />
        <Link to="/">Back</Link>
      </div>
    );
  }
}
