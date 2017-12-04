import React from "react";

export class Footer extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="text-center footer">
        <p id="footer">Created by<a href="https://github.com/keonsam" id="name"> Keon</a> with <span id="icon"><i className="fa fa-heart" aria-hidden="true"></i></span></p>
    </div>
    );
  }
}
