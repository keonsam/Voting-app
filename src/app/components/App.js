import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import { isAuth } from "../utils/api"

import { Header } from "./Header";
import { Banner } from "./Banner";
import { Body } from "./Body";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Footer } from "./Footer";
import {PollCreation} from "./PollCreation";
import {EditPoll} from "./EditPoll";
import { Chart} from "./Chart";

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      login: false,
      userName: '',
      userEmail: ''
 }
 this.handleUpdate = this.handleUpdate.bind(this);
}

handleUpdate() {
  isAuth(isAuthenticated =>{
    if(isAuthenticated){
     this.setState({
       login: true,
       userName: isAuthenticated.userName,
       userEmail: isAuthenticated.userEmail
     });
   }else{
     this.setState({
       login: false
     })
   }
  });
}

componentDidMount() {
 isAuth(isAuthenticated =>{
   if(isAuthenticated){
    this.setState({
      login: true,
      userName: isAuthenticated.userName,
      userEmail: isAuthenticated.userEmail
    });
  }
 });
}

  render() {
    return(
      <HashRouter>
      <div >
        <Header login={this.state.login} userName={this.state.userName} appUpdate={this.handleUpdate}/>
        <Banner login={this.state.login} userEmail={this.state.userEmail} />
        <Route exact path="/" component={Body}/>
        <Route path="/Signup"  render={() => <Signup appUpdate={this.handleUpdate}/> }/>
        <Route path="/Login" render={() => <Login appUpdate={this.handleUpdate}/> }/>
        <Route path="/PollCreation" render={() => <PollCreation /> }/>
        <Route path="/EditPoll" render={() => <EditPoll userEmail={this.state.userEmail}/> }/>
        <Route path="/Chart/:id" component={Chart}/>
        <Footer/>
      </div>
  </HashRouter>
    );
  }
}
