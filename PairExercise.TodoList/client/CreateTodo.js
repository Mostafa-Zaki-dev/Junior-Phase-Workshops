import React, { Component } from 'react';
import axios from 'axios';

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
