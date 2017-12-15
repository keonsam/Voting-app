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

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      login: false,
      userName: '',
      userEmail: ''
 }
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
        <Header login={this.state.login} userName={this.state.userName} />
        <Banner login={this.state.login} userEmail={this.state.userEmail} />
        <Route exact path="/" component={Body}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/Login" component={Login}/>
        <Route path="/PollCreation" component={PollCreation}/>
        <Footer/>
      </div>
  </HashRouter>
    );
  }
}
