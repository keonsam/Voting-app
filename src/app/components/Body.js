import React from "react";

export class Body extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="row panel">
      <div className="col-1">
       </div>
       <div className="col-10">
       <div className="card">
       <div className="card-header card-default">
        <h3>Recent Poll</h3>
       </div>
       <div className="card-block">
        <ul>
         <li>test</li>
         <li>test1</li>
         <li>test2</li>
        </ul>
       </div>
      </div>
    </div>
    <div className="col-1">
    </div>
    </div>
    );
  }
}
