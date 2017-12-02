import React from "react";

export class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <nav className="navbar navbar-toggleable navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="home">Votex</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link home" href="home" >Home<span className="sr-only">(current)</span></a>
      </li>
      </ul>
     <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="signup">Signup</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="login">Login</a>
      </li>
    </ul>
  </div>
</nav>
    );
  }
}
