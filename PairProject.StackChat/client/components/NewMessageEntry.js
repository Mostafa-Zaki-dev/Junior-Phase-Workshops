import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeMessage, postMessage } from '../store';

class NewMessageEntry extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.state = '';
  }
  handleChange(e) {
    this.props.write(e.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();

    const content = this.props.newMessageEntry;

    // our channelId is available from the props sent by MessagesList, which it receives as props from the Route!
    let { channelId, post } = this.props;
    post({ content, channelId });
    e.target.content.value = ''; // clearing the content input value
  }
  render() {
    return (
      <form id="new-message-form" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            placeholder="Say something nice..."
            onChange={this.handleChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">
              Chat!
            </button>
          </span>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  newMessageEntry: state.newMessageEntry,
});

const mapDispatchToProps = (dispatch) => ({
  write: (inputContent) => dispatch(writeMessage(inputContent)),
  post: (message) => dispatch(postMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageEntry);
