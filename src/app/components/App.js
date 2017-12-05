import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { Banner } from "./Banner";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Signup } from "./Signup";
import { Login } from "./Login";

export class App extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <Router>
      <div className="container-fluid p-0">
      <nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <NavLink className="navbar-brand" to="/">Votex</NavLink>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link home" to="/" >Home<span className="sr-only">(current)</span></NavLink>
      </li>
      </ul>
     <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/Signup">Signup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Login">Login</NavLink>
      </li>
    </ul>
  </div>
</nav>
        <Banner/>
        <Route exact path="/" component={Body}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/Login" component={Login}/>
        <Footer/>
      </div>
  </Router>
    );
  }
}
