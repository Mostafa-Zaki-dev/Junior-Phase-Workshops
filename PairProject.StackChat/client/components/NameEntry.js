import React from 'react';
import { connect } from 'react-redux';
import { userSet } from '../store';

class NameEntry extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { setUser } = this.props;
    setUser(e.target.value);
  }

  render() {
    return (
      <form className="form-inline">
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          placeholder="Enter your name"
          className="form-control"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(userSet(user)),
});

export default connect(null, mapDispatchToProps)(NameEntry);
