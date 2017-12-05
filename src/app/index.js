import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../css/main.scss';

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Body } from "./components/Body";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";


class App extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <Router>
      <div className="container-fluid p-0">
        <Header />
        <Banner/>
        <Route exact path="/" component={Body}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/Login" component={Login}/>
        <Footer/>
      </div>
  </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));
