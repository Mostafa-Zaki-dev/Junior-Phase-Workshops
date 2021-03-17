import React, { Component } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import db from './firebase-config';

export default class UpdateTodo extends Component {
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
    /* comment in what is commented out if you want to use the local server api functionality */

    try {
      const { todo, updateTodo } = this.props;
      e.preventDefault();
      // const { data } = await axios.put(`/api/todos/${todo.id}`, this.state);
      await db.collection('todos').doc(todo.id).update(this.state); // no returned value from update method
      const doc = await db.collection('todos').doc(todo.id).get();
      const updatedDoc = { id: doc.id, ...doc.data() };
      updateTodo(updatedDoc);
      this.setState({ taskName: '', assignee: '' });
    } catch (error) {
      console.log('there was an error in handleSubmit:', error);
    }
  }
  render() {
    return (
      <TodoForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    );
  }
}
