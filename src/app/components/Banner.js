import React from "react";
import { Redirect} from "react-router-dom";

export class Banner extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      part: '',
      triggerRedirect: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    this.setState({
      part: "/"+e.target.name,
      triggerRedirect: true
    });
  }
  render() {
    return(
      <div className="text-center banner">
       <h2>Votex App</h2>
       <p>Free Custom Online Polls in just a few Clicks.</p>
       {!this.props.login && <button className="btn btn-success">Sign up</button>}
       {this.props.login && <div><button name="PollCreation" className="btn btn-success" onClick={this.handleClick}>New Poll</button>
       <button name="EditPoll" className="btn btn-info" onClick={this.handleClick}>My Polls</button>
         </div>}
      {this.state.triggerRedirect && <Redirect to={this.state.part}/>}
    </div>
    );
  }
}
