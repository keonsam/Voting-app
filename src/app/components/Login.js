import React from "react";

export class Login extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="signup">
      <div className="row">
       <div className="col-1">
       </div>
       <div className="col-10">
          <form method="post" action="../form">
           <label htmlFor="Enter Email">Email:</label>
           <input name="eml" type="text" />
           <label htmlFor="Enter Pass">Password:</label>
           <input name="pass" type="password" />
           <button className="btn btn-success" type="login">Log In</button>
          </form>
       </div>
       <div className="col-1">
       </div>
      </div>
      </div>
  );
 }
}
