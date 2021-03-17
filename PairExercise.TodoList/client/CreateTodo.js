import React, { Component } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import db from './firebase-config';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      assignee: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  async handleSubmit(e) {
    /* comment in what is commented out if you want to use the local server interaction with local todos database */

    try {
      const { addTodo } = this.props;
      e.preventDefault();
      // const { data } = await axios.post('/api/todos', this.state);
      const { id } = await db.collection('todos').add(this.state);
      console.log('added dataId: ', id);
      const todo = { id, ...this.state };
      addTodo(todo);
      this.setState({ taskName: '', assignee: '' });
    } catch (error) {
      console.log('there was an error in handleSubmit:', error);
    }
  }
  render() {
    return (
      <TodoForm {...this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
    );
  }
}
