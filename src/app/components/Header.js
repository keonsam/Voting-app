import React from "react";
import { Route, NavLink, HashRouter } from 'react-router-dom';

export class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
    <HashRouter>
      <nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="/">Votex</a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link home" href="/" >Home<span className="sr-only">(current)</span></NavLink>
      </li>
      </ul>
     <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" href="/Signup">Signup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" href="/Login">Login</NavLink>
      </li>
    </ul>
  </div>
</nav>
</HashRouter>
    );
  }
}
