import React from 'react';

export class PollCreation extends React.Component{
  constructor(props){
  super(props);
  this.state ={
    title: '',
    options: ''
  }
  this.handleChange = this.handleChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
 }
 handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
 }
 onSubmit() {
   e.preventDefault();

 }
 render() {
   return (
     <div className="jumbotron ng-scope">
     <h1>Create your Poll!</h1>
     <form onSubmit={this.onSubmit}>
     <label htmlFor="Enter Title">Title:</label>
     <br/>
     <input style={{width: "100%"}} name="title" type="text" onChange={this.handleChange} value={this.state.title} required/>
     <br/>
     <label htmlFor="Enter options">Options</label>
     <textarea name="options" style={{width: "100%"}} placeholder='Enter options separated by commas'onChange={this.handleChange} value={this.state.options} required>
     </textarea>
     <br/>
     <button className="btn btn-primary" type="submit">Create Poll</button>
     </form>
     </div>
   );
 }
}
