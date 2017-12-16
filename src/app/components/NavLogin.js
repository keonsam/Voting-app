import React from "react";
import { Redirect } from 'react-router-dom';
import { logout } from '../utils/api';

export class NavLogin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
   triggerRedirect: false
 }
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
logout(()=>{
this.props.appUpdate();
 this.setState({
   triggerRedirect: true
 });
});
}

render() {
  return (
  <ul className="navbar-nav ml-auto">
  <li className="nav-item">
    <a className="nav-link">{this.props.userName}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={this.handleClick} >Logout</a>
  </li>
   { this.state.triggerRedirect && <Redirect to="/Login" /> }
  </ul>
);
 }
}
