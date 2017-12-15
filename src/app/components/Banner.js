import React from "react";

export class Banner extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="text-center banner">
       <h2>Votex App</h2>
       <p>Free Custom Online Polls in just a few Clicks.</p>
       {!this.props.login && <button className="btn btn-success">Sign up</button>}
    </div>
    );
  }
}
