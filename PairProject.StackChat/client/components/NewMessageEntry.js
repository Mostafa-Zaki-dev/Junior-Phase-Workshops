import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeMessage } from '../store';

class NewMessageEntry extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.write(e.target.value);
  }
  render() {
    return (
      <form id="new-message-form">
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

mapDispatchToProps = (dispatch) => ({
  write: (inputContent) => dispatch(writeMessage(inputContent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageEntry);
