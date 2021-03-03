import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div id="navbar" className="row">
      <NavLink activeStyle={{ fontWeight: 'bold', color: 'red' }} to="/stories">
        Stories
      </NavLink>
      <NavLink activeStyle={{ fontWeight: 'bold', color: 'red' }} to="/authors">
        Authors
      </NavLink>
    </div>
  );
};

export default Navbar;
