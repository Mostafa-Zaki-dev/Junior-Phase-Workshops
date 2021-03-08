import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
  constructor() {
    super();
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
    e.preventDefault();
    console.log(`
    taskName: ${this.state.taskName}
    assignee: ${this.state.assignee}
    `);
    const res = await axios.post('/api/todos', this.state);
    this.setState({ taskName: '', assignee: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Task Name: </label>
        <input
          type="text"
          name="taskName"
          onChange={this.handleChange}
          value={this.state.taskName}
        />
        <label>Assign To: </label>
        <input
          type="text"
          name="assignee"
          onChange={this.handleChange}
          value={this.state.assignee}
        />
        <button>Submit</button>
      </form>
    );
  }
}
