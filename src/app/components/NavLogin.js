import React from "react";
import {NavLink} from 'react-router-dom';

export class NavLogin extends React.Component {
  constructor(props){
    super(props);
}
render() {
  return (
  <ul className="navbar-nav ml-auto">
  <li className="nav-item">
    <NavLink className="nav-link" to="/" activeClassName="activeNav">{this.props.userName}</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/" activeClassName="activeNav">Logout</NavLink>
  </li>
  </ul>
);
 }
}
