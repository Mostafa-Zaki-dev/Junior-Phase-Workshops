import React from 'react';
import { connect } from 'react-redux';
import { SHOW_ALL, SHOW_BOUGHT, SHOW_ACTIVE, setVisibilityFilter } from '../store';

const Footer = (props) => (
  <div className="footer">
    <button
      className="btn btn-primary btn-sm"
      onClick={() => props.setVisibilityFilter(SHOW_ALL)}
      style={{ margin: '5px' }}
    >
      All
    </button>
    <button
      className="btn btn-success btn-sm "
      onClick={() => props.setVisibilityFilter(SHOW_BOUGHT)}
      style={{ margin: '5px' }}
    >
      Bought
    </button>
    <button
      className="btn btn-danger btn-sm"
      onClick={() => props.setVisibilityFilter(SHOW_ACTIVE)}
      style={{ margin: '5px' }}
    >
      Not Yet
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: (type) => dispatch(setVisibilityFilter(type)),
});

export default connect(null, mapDispatchToProps)(Footer);
