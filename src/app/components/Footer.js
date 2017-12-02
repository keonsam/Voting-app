import React from "react";

export class Footer extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="text-center footer">
        <p id="footer"><a href="#">Votex</a> made by<a href="https://github.com/keonsam"> Keon</a></p>
    </div>
    );
  }
}
