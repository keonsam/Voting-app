import React from "react";
import {getAllPolls} from "../utils/api";
import {Redirect} from "react-router-dom";


export class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [],
      id: '',
      triggerRedirect: false
    }
  }

  handleClick =(val) =>{
    this.setState({
      id: val,
      triggerRedirect: true
    });
  }

  componentDidMount(){
  getAllPolls(res =>{
    this.setState({
      list: res
    });
  });
  }
  render() {
    const part = '/Chart/' + this.state.id;
    return(
      <div className="container">
      <div className="panel">
       <div className="card">
       <div className="card-header card-default">
        <h3>Recent Poll</h3>
       </div>
       <div className="card-block">
        <ul className="list-group">
         {
           this.state.list.map((data,i)=>{
             return (
               <li className="list-group-item" key={i} id={i} onClick={this.handleClick.bind(this, data._id)}>{data.title}</li>
             );
           })
         }
        </ul>
        {this.state.triggerRedirect && <Redirect to={part} />}
       </div>
      </div>
    </div>
    </div>
    );
  }
}
