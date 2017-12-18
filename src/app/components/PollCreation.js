import React from 'react';
import {postChart} from '../utils/api';
import { Redirect} from "react-router-dom";

export class PollCreation extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    id: '',
    title: '',
    options: '',
    colors: '',
    triggerRedirect: false
  };
  this.onSubmit = this.onSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
 }

 handleChange(e) {
  this.setState({
   [e.target.name]: e.target.value
  });
 }

 onSubmit(e){
   e.preventDefault();
   const options = this.state.options.split(",");
   const colors = this.state.colors.split(",")
   postChart(this.state.userEmail,this.state.title, options, colors, (res)=> {
     if(res) {
       this.setState({
         id: res,
         triggerRedirect: true
       });
     }
   });
 }
 render() {
   const part = "/Chart/"+ this.state.id;
   console.log()
   return (
     <div className="container">
     <div className="jumbotron">
     <h4>Create your Poll!</h4>
     <form onSubmit={this.onSubmit}>
     <label htmlFor="Enter Title">Title:</label>
     <br/>
     <input style={{width: "100%"}} name="title" type="text" onChange={this.handleChange} value={this.state.title} required/>
     <br/>
     <label htmlFor="Enter options">Options</label>
     <textarea name="options" style={{width: "100%"}} placeholder='Enter options separated by commas'onChange={this.handleChange} value={this.state.options} required>
     </textarea>
     <br/>
     <label htmlFor="Enter Colors">Options</label>
     <textarea name="colors" style={{width: "100%"}} placeholder='Enter colors separated by commas'onChange={this.handleChange} value={this.state.colors} required>
     </textarea>
     <br/>
     <button className="btn btn-primary" type="submit">Create Poll</button>
     {this.state.triggerRedirect && <Redirect to={part} />}
     </form>
     </div>
     </div>
   );
 }
}
