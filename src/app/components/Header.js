import React from 'react';
import {NavLink} from 'react-router-dom';

export const Header = () => {
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
   <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <NavLink className="nav-link" to="/Signup" activeClassName="activeNav">Signup</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/Login" activeClassName="activeNav">Login</NavLink>
    </li>
  </ul>
</div>
</nav>
  );
}
