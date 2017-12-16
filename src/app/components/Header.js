import React from 'react';
import {NavLink} from 'react-router-dom';
import { logout } from '../utils/api';

import { NavSignin } from './NavSignin';
import { NavLogin } from './NavLogin';

export class Header extends React.Component {
  constructor(props){
  super(props);
  this.state ={
    reRender: false
  }

}

render() {
  return (
    <nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<NavLink className="navbar-brand" to="/">Votex</NavLink>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item ">
      <NavLink className="nav-link home" to="/" exact activeClassName="activeNav" >Home</NavLink>
    </li>
    </ul>
    {!this.props.login && <NavSignin />}
    {this.props.login && <NavLogin userName={this.props.userName} appUpdate={this.props.appUpdate}/>}
</div>
</nav>
  );
 }
}
