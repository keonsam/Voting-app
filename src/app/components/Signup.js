import React from "react";

export class Signup extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault()
  }
  render() {
    return(
    <div className="signup">
    <div className="row">
     <div className="col-1">
     </div>
     <div className="col-10">
        <form method="post" action="../signup" onSubmit={this.handleSubmit}>
         <label htmlFor="Enter Name">Name:</label>
         <input name="str" type="text" required/>
         <label htmlFor="Enter Email">Email:</label>
         <input name="eml" type="text" required/>
         <label htmlFor="Enter Pass">Password:</label>
         <input name="pass" type="password" required/>
         <button className="btn btn-success" type="signup">Sign Up</button>
        </form>
     </div>
     <div className="col-1">
     </div>
    </div>
    </div>
  );
 }
}
