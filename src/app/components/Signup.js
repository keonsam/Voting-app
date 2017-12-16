import React from "react";
import { Redirect} from "react-router-dom";

import {signup} from "../utils/api.js";

export class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      password: '',
      error: false,
      triggerRedirect: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault()
    signup(this.state.userName, this.state.userEmail, this.state.password, (res) => {
      if(res == true) {
        this.setState({
          triggerRedirect: true
        });
        this.props.appUpdate();
      }else {
        this.setState({
          error: res
        });
      }
    });
  }
  render() {
    return(
    <div className="signup">
    <div className="row">
     <div className="col-1">
     </div>
     <div className="col-10">
        <form onSubmit={this.onSubmit}>
         <label htmlFor="Enter Name">Name:</label>
         <input name="userName" type="text" onChange={this.handleChange} value={this.state.userName} required/>
         <label htmlFor="Enter Email">Email:</label>
         <input name="userEmail" type="text" onChange={this.handleChange} value={this.state.userEmail} required/>
         <label htmlFor="Enter Pass">Password:</label>
         <input name="password" type="password" onChange={this.handleChange} value={this.state.password} required/>
         {this.state.error && <p id="error">{this.state.error}</p>}
         <button className="btn btn-success" type="sumbit">Sign Up</button>
         { this.state.triggerRedirect && <Redirect to="/PollCreation" /> }
        </form>
     </div>
     <div className="col-1">
     </div>
    </div>
    </div>
  );
 }
}
