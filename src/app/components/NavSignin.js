import React from "react";
import {NavLink} from 'react-router-dom';

export class NavSignin extends React.Component {
  constructor(props){
    super(props);
}
render() {
  return (
  <ul className="navbar-nav ml-auto">
  <li className="nav-item">
    <NavLink className="nav-link" to="/Signup" activeClassName="activeNav">Signup</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/Login" activeClassName="activeNav">Login</NavLink>
  </li>
  </ul>
);
 }
}
