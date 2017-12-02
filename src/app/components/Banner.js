import React from "react";

export class Banner extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="text-center banner">
       <h2>Votex App</h2>
       <p>Custom Online Polls at a few Clicks. Join for Free.</p>
       <button className="btn btn-success">Sign up</button>
    </div>
    );
  }
}
