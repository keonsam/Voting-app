import React from "react";
import {getChartItems} from "../utils/api";
import {Redirect} from "react-router-dom";

export class EditPoll extends React.Component {
  constructor(props){
  super(props)
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

componentDidMount() {
  getChartItems(this.props.userEmail,(res)=>{
    this.setState({
      list: res
    });
  });
}

render() {
  const part = '/Chart/' + this.state.id;
  return(
    <div className="container">
    <div className="jumbotron">
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
  );
}
}
