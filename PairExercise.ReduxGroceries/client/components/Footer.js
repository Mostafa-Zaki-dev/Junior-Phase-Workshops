import React from 'react';
import { connect } from 'react-redux';
import { SHOW_ALL, SHOW_BOUGHT, SHOW_ACTIVE, setVisibilityFilter } from '../store';

const Footer = (props) => (
  <div className="footer">
    <button onClick={() => props.setVisibilityFilter(SHOW_ALL)}>All</button>
    <button onClick={() => props.setVisibilityFilter(SHOW_BOUGHT)}>Bought</button>
    <button onClick={() => props.setVisibilityFilter(SHOW_ACTIVE)}>Not Yet</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: (type) => dispatch(setVisibilityFilter(type)),
});

export default connect(null, mapDispatchToProps)(Footer);
