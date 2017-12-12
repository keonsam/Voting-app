import React from "react";
import { HashRouter, Route } from 'react-router-dom';

import { Header } from "./Header";
import { Banner } from "./Banner";
import { Body } from "./Body";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Footer } from "./Footer";


export class App extends React.Component{
  constructor(props){
    super(props);

}
  render() {
    return(
      <HashRouter>
      <div className="container-fluid p-0">
        <Header />
        <Banner/>
        <Route exact path="/" component={Body}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/Login" component={Login}/>
        <Footer/>
      </div>
  </HashRouter>
    );
  }
}
