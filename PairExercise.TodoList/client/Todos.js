import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo';
import CreateTodo from './CreateTodo';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/todos');
    this.setState({ todos: data });
  }

  render() {
    return (
      <div id="todos">
        <CreateTodo addTodo={this.addTodo} />
        {this.state.todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    );
  }
}
