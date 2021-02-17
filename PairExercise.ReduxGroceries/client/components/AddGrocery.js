import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGrocery } from '../store';

class AddGrocery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(evt) {
    // console.log('evt.key from handlKey:', evt.key);
    if (evt.key === 'Enter') {
      this.props.add(this.state.input);
      this.setState({ input: '' });
    }
  }

  render() {
    return (
      <div className="add-grocery">
        <input
          type="text"
          value={this.state.input}
          onChange={(evt) => {
            // console.log('evt.target from onChange:', evt.target);
            // console.log('evt.target.value from onChange:', evt.target.value);
            this.setState({ input: evt.target.value });
          }}
          onKeyDown={this.handleKey}
        />
        <button
          onClick={() => {
            this.props.add(this.state.input);
            this.setState({ input: '' });
          }}
        >
          Add Grocery
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (text) => dispatch(addGrocery(text)),
});

// first argument is null Since we are not mapping any state for this component.

export default connect(null, mapDispatchToProps)(AddGrocery);
