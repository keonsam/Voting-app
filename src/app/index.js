import React from "react";
import { render } from "react-dom";
import { Route, NavLink, HashRouter } from 'react-router-dom';

import '../css/main.scss';
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <HashRouter>
      <div className="container-fluid p-0">
        <Header/>
        <Banner/>
        <Route path="/" component={Body}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/Login" component={Login}/>
        <Footer/>
      </div>
      </HashRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));
