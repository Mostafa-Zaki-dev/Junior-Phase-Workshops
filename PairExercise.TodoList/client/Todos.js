import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import db from './firebase-config';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  async componentDidMount() {
    /* comment in what is commented out if you want to use the local server api functionality */

    // const { data } = await axios.get('/api/todos');
    const { docs } = await db.collection('todos').get();
    const firestoreTodos = docs.map((doc) => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data };
    });
    console.log('collection todos:', firestoreTodos);
    // this.setState({ todos: data });
    this.setState({ todos: firestoreTodos });
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  async removeTodo(todoId) {
    /* comment in what is commented out if you want to use the local server api functionality */

    try {
      const { todos } = this.state;
      // await axios.delete(`/api/todos/${todoId}`);
      await db.collection('todos').doc(todoId).delete();
      const filteredTodos = todos.filter((todo) => todo.id !== todoId);
      this.setState({
        todos: filteredTodos,
      });
    } catch (error) {
      console.log('there was an error in removeTodo:', error);
    }
  }

  render() {
    return (
      <div id="todos">
        <CreateTodo addTodo={this.addTodo} />
        {this.state.todos.map((todo) => (
          <Todo removeTodo={this.removeTodo} todo={todo} key={todo.id} />
        ))}
      </div>
    );
  }
}
