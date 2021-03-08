import React, { Component } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';

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
    try {
      const { addTodo } = this.props;
      e.preventDefault();
      const { data } = await axios.post('/api/todos', this.state);
      addTodo(data);
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
