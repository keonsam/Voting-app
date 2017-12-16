import React from "react";
import { Redirect} from "react-router-dom";

export class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userEmail: '',
      password: '',
      error: false,
      triggerRedirect: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('res');
    login(this.state.userEmail, this.state.password, (res) => {
      if(res == true) {
        this.props.appUpdate();
        this.setState({
          triggerRedirect: true
        });
      }else {
        this.setState({
          error: 'Invalid username or password'
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
           <label htmlFor="Enter Email">Email:</label>
           <input name="userEmail" type="text" onChange={this.handleChange} value={this.state.userEmail}/>
           <label htmlFor="Enter Pass">Password:</label>
           <input name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
            {this.state.error && <p id="error">{this.state.error}</p>}
           <button className="btn btn-success" type="submit">Log In</button>
           { this.state.triggerRedirect && <Redirect to="/" /> }
          </form>
       </div>
       <div className="col-1">
       </div>
      </div>
      </div>
  );
 }
}
